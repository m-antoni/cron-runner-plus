import Link from 'next/link';
import { FaReact, FaChartLine, FaAlignLeft, FaClock, FaSuitcase } from 'react-icons/fa6';

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red */}
      <div className="sidebar-wrapper" data-color="blue">
        <div className="logo">
          <a href="javascript:void(0)" className="simple-text logo-mini">
            <FaReact size={32} className="spin-clockwise" />
          </a>
          <a href="javascript:void(0)" className="simple-text logo-normal">
            CRON Runner Plus
          </a>
        </div>
        <ul className="nav">
          <li>
            <Link href="/dashboard" className="d-flex align-items-center">
              <FaChartLine size={20} />
              <div className="pl-2">Dashboard</div>
            </Link>
          </li>
          <li>
            <Link href="/cron-jobs" className="d-flex align-items-center">
              <FaClock size={20} />
              <div className="pl-2">Cron Jobs</div>
            </Link>
          </li>
          <li>
            <Link href="/logs" className="d-flex align-items-center">
              <FaAlignLeft size={20} />
              <div className="pl-2">logs</div>
            </Link>
          </li>
          <li>
            <Link href="/about" className="d-flex align-items-center">
              <FaSuitcase size={20} />
              <div className="pl-2">About</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
