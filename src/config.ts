import equipment from "./assets/img/equipment.png";

interface ViewMapProps {
    label: string;
    link: string;
    icon: string;
}

export const zViewMap : ViewMapProps[] = [
    {
        icon: equipment,
        label: "Equipments",
        link: "/equipments",
    }
]
  