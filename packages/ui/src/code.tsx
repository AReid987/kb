/**
 * @description Takes two properties, `children` and `className`, and returns a JSX
 * element representing an HTML code element. It sets the class name of the code
 * element to the provided value and wraps the provided children within it.
 * 
 * @param {object} obj - Destructured into two properties: `children` and `className`.
 * The `children` property expects an instance of `React.ReactNode`, which can be any
 * React element, while `className` is optional and accepts a string.
 * 
 * @param {React.ReactNode} obj.children - Required for rendering code inside JSX.
 * 
 * @param {string} obj.className - Optional.
 * 
 * @returns {JSX.Element} A React element representing an HTML code element (`<code>`)
 * with potentially overridden class name and enclosed child content.
 */
export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return <code className={className}>{children}</code>;
}
