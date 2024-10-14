import AnchorLink from "react-anchor-link-smooth-scroll";
import { TSectionItem } from "../../../types";

type SideMenuProps = {
  visibleSection: string | undefined;
  sections: TSectionItem[];
};

export const SideMenu = ({ sections, visibleSection }: SideMenuProps) => {
  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <li key={section.id} className="mb-2">
            <button
              className={`text-base font-normal ${
                visibleSection === section.id
                  ? "text-tertiary-accent-foreground"
                  : "hover:text-tertiary-accent-foreground text-[#889198] "
              }`}
            >
              <AnchorLink href={`#${section.id}`} offset={() => 150}>
                {section.title}
              </AnchorLink>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
