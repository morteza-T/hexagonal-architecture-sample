export type ExcludePropertyType<T, Type> = Omit<
  T,
  { [K in keyof T]: T[K] extends Type ? K : never }[keyof T]
>;
// export type ExcludePropertyType<T, Type> = Pick<
//   T,
//   { [K in keyof T]-?: T[K] extends Type ? never : K }[keyof T]
// >;
