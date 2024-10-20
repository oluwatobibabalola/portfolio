import { useEffect, useState, useCallback } from "react";
import { throttle } from "lodash";
import { TSectionItem } from "../types";

export function useVisibleSection(sections: Array<TSectionItem>) {
  const [visibleSection, setVisibleSection] = useState<string | undefined>();

  const isSectionVisible = useCallback((elementId: string) => {
    const section = document.getElementById(elementId);

    if (section) {
      const sectionPosition = section.getBoundingClientRect();

      const viewPort = {
        height: window.innerHeight,
        width: window.innerWidth,
      };

      return (
        sectionPosition.top >= 0 &&
        sectionPosition.left >= 0 &&
        sectionPosition.bottom <= viewPort.height &&
        sectionPosition.right <= viewPort.width
      );
    }

    return false;
  }, []);

  const checkVisibility = useCallback(
    throttle(() => {
      let foundVisibleSection: string | undefined;

      sections.forEach(({ id }) => {
        if (!foundVisibleSection && isSectionVisible(id)) {
          foundVisibleSection = id;
        }
      });

      if (foundVisibleSection) {
        setVisibleSection(foundVisibleSection);
      }
    }, 300),
    [sections, isSectionVisible]
  );

  useEffect(() => {
    if (sections.length === 0) return;

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Initial check on mount

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, [sections, checkVisibility]);

  return visibleSection;
}
