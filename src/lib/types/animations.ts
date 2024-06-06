import { HTMLMotionProps } from "framer-motion"

export type Animations = Record<string, (...args: any) => HTMLMotionProps<any>>
