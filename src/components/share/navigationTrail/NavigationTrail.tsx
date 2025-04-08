import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

interface IProps {
  path: string;
}

export default function NavigationTrail({ path }: IProps) {
  const pathSegments = path.split("/").filter((segment) => segment);

  const formatLabel = (segment: string) => {
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Generate breadcrumb links
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
    return { href, label: formatLabel(segment) };
  });

  return (
    <section className="bg-whitePrimary w-full rounded-2xl h-16 p-10 flex items-center">
      <Breadcrumb>
        <BreadcrumbList className="text-base flex items-center">
          {breadcrumbs.map((item, index) => (
            <div key={item.href} className="flex items-center">
              {index > 0 && (
                <BreadcrumbSeparator className="px-4">
                  <MdOutlineKeyboardDoubleArrowRight
                    className="text-lightAltBlue"
                    fontSize={20}
                  />
                </BreadcrumbSeparator>
              )}

              <BreadcrumbItem>
                {index === breadcrumbs.length - 1 ? (
                  <BreadcrumbPage className="text-lightAltBlue font-semibold">
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={item.href}
                    className="text-violetBlue hover:text-lightAltBlue"
                  >
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </section>
  );
}
