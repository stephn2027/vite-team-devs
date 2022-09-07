/* eslint-disable react/require-default-props */
import './styles.scss';
import Header from '../Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  );
}
