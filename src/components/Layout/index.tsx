/* eslint-disable react/require-default-props */
import './styles.css';
import Header from '../Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <div className="container">
        <Header />
        {children}
      </div>
    </div>
  );
}
