import styles from './button.module.css';

export type ButtonProps = {
  /**
   * The text to display inside the button. If not provided, a default welcome message is shown.
   */
  label?: string;
}

/**
 * Button component that displays a label inside a styled container.
 */
export function Button({ label }: ButtonProps) {
  return (
    <div className={styles['container']}>
      <h1>{label || 'Welcome to Button component from @nx-monorepo-design-system-tryout/button package!!'}</h1>
    </div>
  );
}

export default Button;
