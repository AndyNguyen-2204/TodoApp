import { styles } from "./styles"
export function renderColorBlock(value: number) {
  if (value === 1) {
    return [styles.wrapbox, styles.type1]
  } else if (value === 2) {
    return [styles.wrapbox, styles.type2]
  } else if (value === 3) {
    return [styles.wrapbox, styles.type3]
  } else if (value === 4) {
    return [styles.wrapbox, styles.type4]
  } else if (value === 5) {
    return [styles.wrapbox, styles.type5]
  } else if (value === 6) {
    return [styles.wrapbox, styles.type6]
  } else if (value === 7) {
    return [styles.wrapbox, styles.type7]
  } else if (value === 8) {
    return [styles.wrapbox, styles.type8]
  }
}