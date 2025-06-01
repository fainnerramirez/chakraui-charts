import { Stack } from "@chakra-ui/react";
import { ButtonPaletteColor, ButtonPaletteProps } from "./button-palette-color";

/**
 * 
 * #4A90E2  // Azul claro - Color principal de barras o áreas
#50E3C2  // Verde suave - Alternativa secundaria o para comparación
#D9E1E8  // Gris claro - Fondos o líneas de referencia
#34495E  // Azul marino - Texto o líneas
#F8E71C  // Amarillo pastel - Resaltados o alertas suaves
#F5A623  // Coral claro - Para contrastes o datos especiales
#9B59B6  // Morado grisáceo - Categorías alternativas

 */
const buttonsPaletteData: Array<ButtonPaletteProps> = [
  {
    bg: "#4A90E2",
    labelTooltip: "Azul Claro"
  },
  {
    bg: "#50E3C2",
    labelTooltip: "Verde Suave"
  },
  {
    bg: "#D9E1E8",
    labelTooltip: "Gris Claro"
  },
  {
    bg: "#F8E71C",
    labelTooltip: "Amarillo Pastel"
  },
  {
    bg: "#F5A623",
    labelTooltip: "Coral Claro"
  },
  {
    bg: "#9B59B6",
    labelTooltip: "Morado Grisáceo"
  }
]

const PalletteThemeColor: React.FC = () => {
  return (
    <Stack
      direction={"column"}
      spacing={3}
      position={"sticky"}
      top={10}
      display={{ base: "none", md: "none", lg: "inline-flex" }}
    >
      {
        buttonsPaletteData.map((button, _) => {
          return (
            <ButtonPaletteColor key={new Date().getTime()} {...button} />
          )
        })
      }
    </Stack>
  );
};

export default PalletteThemeColor;