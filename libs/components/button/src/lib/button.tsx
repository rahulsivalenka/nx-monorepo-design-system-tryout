import styles from './button.module.css';

export type ButtonProps = {
  label?: string;
}

export function Button({ label }: ButtonProps) {
  return (
    <div className={styles['container']}>
      <h1>{label || 'Welcome to Button from @nx-monorepo-design-system-tryout/button package!'}</h1>
    </div>
  );
}

export default Button;
