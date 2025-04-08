import Link from "next/link";
import { IconType } from "react-icons/lib";

interface IProps {
  title: string;
  IconComponent: IconType;
  path: string;
}
export default function SetUpCard({ title, IconComponent, path }: IProps) {
  return (
    <Link href={path}>
      <div
        className="border border-greySecondary h-44 px-6 py-3 rounded-lg shadow shadow-greySecondary group 
    hover:bg-lightAltBlue hover:shadow-lg hover:scale-105 transition-all duration-500 ease-in-out"
      >
        <div className="flex items-center justify-center gap-3 h-full">
          <div
            className="rounded-full p-3 bg-lightAltBlue transition-all duration-500 ease-in-out 
        group-hover:bg-whitePrimary group-hover:scale-110"
          >
            <IconComponent
              fontSize={24}
              className="text-whitePrimary transition-all duration-500 ease-in-out 
          group-hover:text-lightAltBlue group-hover:rotate-12"
            />
          </div>
          <p
            className="text-xl font-medium text-violetBlue  
        group-hover:text-whitePrimary "
          >
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
}
