import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useDispatch, useSelector } from "react-redux";
import { toggleDealDrawer } from "@/features/deals/slice";
import ViewDealForm from "./form-edit";
import DealCreationFrom from "./form-create";

export function DealDrawer() {
  const openDrawer = useSelector((state) => state.deals.drawer);
  const deal = useSelector((state) => state.deals.deal);
  const dispatch = useDispatch();

  const handleOpenChange = (isOpen) => {
    if (isOpen !== openDrawer) {
      dispatch(toggleDealDrawer());
    }
  };

  return (
    <Drawer direction="right" open={openDrawer} onOpenChange={handleOpenChange}>
      <DrawerContent className="w-full h-full ml-auto border-none overflow-y-auto overflow-x-hidden">
        {deal ? (
          <ViewDealForm deal={deal} />
        ) : (
          <div className="ml-auto bg-white grid place-items-center">
            <DealCreationFrom />
          </div>
        )}
        {/* <ViewDealForm
          deal={{
            title: "Test",
            name: "testDeal",
            stage: "Initial",
            assignee: "AKhil",
            amount: "10000",
            closingDate: new Date(),
            nextStep: "closing",
            notes: "Random Notes",
            attachements: null,
          }}
        /> */}
      </DrawerContent>
    </Drawer>
  );
}
