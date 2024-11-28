export interface SvgProps {
  format: string,
  height: number,
  width: number,
  src: string
}

export interface ModalProps {
  rules: SvgProps
}

export interface GameItemProps {
  id: string,
  icon: SvgProps,
  position: string,
  colorStart: string,
  colorEnd: string
}