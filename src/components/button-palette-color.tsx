import { Button, Tooltip } from "@chakra-ui/react"
import { usePaletteStore } from "../store/pallette-store";

export type ButtonPaletteProps = {
    bg: string,
    labelTooltip: string
}

export const ButtonPaletteColor: React.FC<ButtonPaletteProps> = ({ bg, labelTooltip }) => {

    const { setPaletteColor } = usePaletteStore();

    return (
        <Tooltip label={labelTooltip} placement="right">
            <Button
                bg={bg}
                onClick={() => setPaletteColor(bg)}
                width={45}
                height={45}
                transition="transform 0.3s ease"
                _hover={{
                    transform: "rotate(90deg)",
                }}
            ></Button>
        </Tooltip>
    )
}