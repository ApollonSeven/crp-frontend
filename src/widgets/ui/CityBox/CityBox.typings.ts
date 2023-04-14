interface CityBoxProps {
    onClick: () => void;
    pros: string[];
    cons: string[];
    cityName: string;
    backgroundType?: 'LosSantos' | 'PaletoBay' | 'SandyShores';
  }
  

  
  export type { CityBoxProps};