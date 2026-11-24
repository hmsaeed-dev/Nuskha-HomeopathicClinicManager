'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { UserPlus, FileSpreadsheet, LayoutDashboard, Clock, Users, Keyboard } from 'lucide-react';
import { useSettingsContext } from '@/context/SettingsContext';

interface HeaderProps {
  onOpenNewPatient: () => void;
  todayCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenNewPatient,
  todayCount,
}) => {
  const pathname = usePathname();
  const { clinicConfig, openSettings } = useSettingsContext();

  const isOpdActive = pathname === '/';
  const isRegisterActive = pathname === '/register';
  const isPatientsActive = pathname === '/patients';

  return (
		<header className="sticky top-0 z-30 mx-4 sm:mx-5 lg:mx-6 mt-3 rounded-2xl bg-white shadow-xs px-6 py-3.5">
			<div className="flex items-center justify-between gap-4">
				{/* Logo & Clinic Title (SSOT Configured) */}
				<div className="flex items-center flex-1 justify-start min-w-0">
					<Link href="/" className="flex items-center gap-3 group">
						<div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
							<Image
								src="/logos/nuskha-logomark-full-color.svg"
								alt={clinicConfig.name}
								width={40}
								height={40}
								className="w-10 h-10 object-contain"
								priority
							/>
						</div>
						<div className="flex flex-col">
							<div className="flex items-center gap-2">
								<span className="font-display text-xl font-bold text-content-primary leading-none tracking-tight">
									{clinicConfig.name}
								</span>
							</div>
							<span className="text-xs text-content-secondary mt-0.5">
								{clinicConfig.subtitle}
							</span>
						</div>
					</Link>
				</div>

				{/* Page Navigation Links */}
				<nav
					aria-label="Primary navigation"
					className="flex items-center justify-center shrink-0 gap-1.5"
				>
					<Link
						href="/"
						title="OPD Workspace Page (F1)"
						className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-150 cursor-pointer ${
							isOpdActive
								? "bg-brand-primary-container text-brand-primary-dark shadow-2xs"
								: "text-content-secondary hover:bg-brand-surface-subtle hover:text-content-primary"
						}`}
					>
						<LayoutDashboard className="w-4 h-4" />
						<span>OPD</span>
					</Link>

					<Link
						href="/register"
						title="Daily Register Page (F3)"
						className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-150 cursor-pointer ${
							isRegisterActive
								? "bg-brand-primary-container text-brand-primary-dark shadow-2xs"
								: "text-content-secondary hover:bg-brand-surface-subtle hover:text-content-primary"
						}`}
					>
						<FileSpreadsheet className="w-4 h-4" />
						<span>Analytics</span>
					</Link>

					<Link
						href="/patients"
						title="Patients Archive Page (F4)"
						className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-150 cursor-pointer ${
							isPatientsActive
								? "bg-brand-primary-container text-brand-primary-dark shadow-2xs"
								: "text-content-secondary hover:bg-brand-surface-subtle hover:text-content-primary"
						}`}
					>
						<Users className="w-4 h-4" />
						<span>Patients</span>
					</Link>
				</nav>

				{/* Live Session Counter & Walk-in Action */}
				<div className="flex items-center flex-1 justify-end gap-2.5">
					{/* Shortcuts & Settings Trigger (?) */}
					<button
						type="button"
						onClick={() => openSettings("shortcuts")}
						className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-brand-surface text-content-primary text-xs font-bold transition-all shadow-2xs cursor-pointer"
						title="Keyboard Shortcuts & Practice Settings (Press ?)"
					>
						<Keyboard className="w-4 h-4 text-brand-primary" />
					</button>

					{/* Real-time Session Chip */}
					<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl text-content-primary text-xs font-semibold">
						<Clock className="w-3.5 h-3.5 text-content-secondary" />
						<span className="font-bold">{todayCount} Visitors</span>
					</div>

					{/* New Patient Registration Trigger (F2) */}
					<button
						onClick={onOpenNewPatient}
						className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-primary text-white text-xs font-semibold shadow-sm hover:bg-brand-primary-hover active:scale-[0.98] transition-all duration-150 cursor-pointer"
						title="Register New Walk-in Patient (Press F2)"
					>
						<UserPlus className="w-4 h-4" />
					</button>
				</div>
			</div>
		</header>
  );
};
