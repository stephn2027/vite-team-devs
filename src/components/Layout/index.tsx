/* eslint-disable react/require-default-props */
import './styles.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="layout">{children}</div>;
}
