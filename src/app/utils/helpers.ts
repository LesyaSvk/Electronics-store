export function enumToArray(enumObj: Record<string, string>): string[] {
  return Object.keys(enumObj).map((key) => enumObj[key]);
}
