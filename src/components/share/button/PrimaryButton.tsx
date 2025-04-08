import styles from '@/styles/Home.module.css';

interface IPrimaryButtonProps {
  label: string;
}

export default function PrimaryButton({ label }: IPrimaryButtonProps) {
  return (
    <button
      className={`bg-primary rounded-full border border-lightAltBlue px-10 py-4 text-white cursor-pointer ${styles.buttonShadow}`}
    >
      {label}
    </button>
  );
}
