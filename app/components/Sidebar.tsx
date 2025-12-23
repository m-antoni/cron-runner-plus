import Link from 'next/link';
import {
  FaReact,
  FaChartLine,
  FaAlignLeft,
  FaClock,
  FaSuitcase,
  FaCircleUser,
} from 'react-icons/fa6';

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red */}
      <div className="sidebar-wrapper bg-dark">
        <div className="logo">
          {/* <a href="javascript:void(0)" className="simple-text logo-mini text-primary">
            <FaReact size={32} className="spin-clockwise" />
          </a> */}
          <a href="javascript:void(0)" className="simple-text logo-normal text-success">
            <img src={'/assets/img/logo2.png'} />
          </a>
        </div>
        <ul className="nav">
          <li>
            <Link href="/cronlabs" className="d-flex align-items-center">
              <FaChartLine size={18} />
              <div className="pl-2 fs-md">Dashboard</div>
            </Link>
          </li>
          <li>
            <Link href="/cronlabs/jobs" className="d-flex align-items-center">
              <FaClock size={18} />
              <div className="pl-2 fs-md">Cron Jobs</div>
            </Link>
          </li>
          <li>
            <Link href="/cronlabs/logs" className="d-flex align-items-center">
              <FaAlignLeft size={18} />
              <div className="pl-2 fs-md">logs</div>
            </Link>
          </li>
          <li>
            <Link href="/cronlabs/contact" className="d-flex align-items-center">
              <FaCircleUser size={18} />
              <div className="pl-2 fs-md">Contact</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
