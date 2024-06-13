import { useNavigation } from "@/lib/hooks/useNavigation"
import { Variants, motion } from "framer-motion"

type Props = {
  hide(): void
}

export const MobileMenu = ({ hide }: Props) => {
  const navigation = useNavigation()
  const variants: Variants = {
    opened: {
      scaleY: 1,
    },
    closed: {
      scaleY: 0,
    },
  }

  return (
    <div className="fixed inset-x-0 h-full lg:hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          bounce: false,
          ease: "easeIn",
          duration: 0.1,
        }}
        className="absolute inset-0 bg-black/75"
        onClick={hide}
      />

      <motion.nav
        variants={variants}
        initial="closed"
        animate="opened"
        className="relative w-full px-4 origin-top bg-white"
      >
        <ul className="">
          {navigation.map((nav) => (
            <li key={nav.title}>
              <a
                className="block p-2 transition-colors active:bg-grey-light"
                href={nav.route}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </div>
  )
}
