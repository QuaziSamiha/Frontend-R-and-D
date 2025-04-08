import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";

interface ITabItem {
  tabLabel: string;
  tabValue: string;
  tabContent: ReactNode;
}

interface IProps {
  tabs: ITabItem[];
}
export default function NavigationTabs({ tabs }: IProps) {
  return (
    <Tabs defaultValue={tabs[0]?.tabValue}>
      <div className="border-b border-greyPrimary mb-16 w-full">
        <TabsList
          className={`flex ${
            tabs.length > 2 ? "justify-evenly" : "justify-start"
          } items-center gap-10 h-auto`}
        >
          {tabs.map((tab) => (
            <TabsTrigger key={tab.tabValue} value={tab.tabValue}>
              {tab.tabLabel}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {tabs.map((tab) => (
        <TabsContent key={tab.tabValue} value={tab.tabValue}>
          {tab.tabContent}
        </TabsContent>
      ))}
    </Tabs>
  );
}
