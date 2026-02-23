import React, { useState, useEffect } from 'react';
import { Users, TrendingUp, DollarSign, Bell, Home, User, BarChart3, Settings, Plus, CheckCircle, Clock, AlertCircle, Download, Share2, Phone, ChevronRight, Star, Zap, Award, ArrowLeft, Copy, LogOut, Menu, X, Edit2, CreditCard, Eye, Filter, Calendar, Mail, MapPin, Banknote, Shield, UserCheck, UserX, Activity, PieChart, TrendingDown, Globe, Building } from 'lucide-react';

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --ink: #0d0d14;
  --paper: #f4f1e8;
  --cream: #eae6da;
  --accent: #e8521a;
  --accent-hover: #d14615;
  --blue: #2455d4;
  --gold: #c9a227;
  --muted: #79746d;
  --border: #d9d4c7;
  --white: #ffffff;
  --green: #1a7a42;
  --warning: #b87118;
  --danger: #b91c1c;
  --sidebar-w: 260px;
}

body { font-family: 'DM Sans', sans-serif; }

.cap { font-family: 'DM Sans', sans-serif; background: var(--paper); min-height: 100vh; color: var(--ink); }

/* GRAIN */
.cap::after {
  content: '';
  position: fixed; inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  pointer-events: none; z-index: 9999; mix-blend-mode: multiply;
}

/* ===== AUTH ===== */
.auth-wrap {
  min-height: 100vh; background: var(--ink);
  display: flex; align-items: center; justify-content: center; padding: 1.5rem;
  position: relative; overflow: hidden;
}
.auth-wrap::before {
  content: ''; position: absolute; top: -25%; right: -15%;
  width: 700px; height: 700px;
  background: radial-gradient(circle, rgba(232,82,26,0.13) 0%, transparent 65%);
  pointer-events: none;
}
.auth-wrap::after {
  content: ''; position: absolute; bottom: -25%; left: -15%;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(36,85,212,0.1) 0%, transparent 65%);
  pointer-events: none;
}
.auth-card {
  background: var(--paper); width: 100%; max-width: 440px;
  padding: 2.75rem; position: relative; z-index: 1;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.04), 0 50px 100px rgba(0,0,0,0.5);
}
.auth-eyebrow {
  font-family: 'Syne', sans-serif; font-size: 0.62rem;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--accent); margin-bottom: 0.5rem;
}
.auth-title {
  font-family: 'Syne', sans-serif; font-size: 2.2rem;
  font-weight: 800; line-height: 1.05; color: var(--ink); margin-bottom: 0.4rem;
}
.auth-sub { font-size: 0.88rem; color: var(--muted); margin-bottom: 2.25rem; font-weight: 300; }
.f-label {
  display: block; font-family: 'Syne', sans-serif; font-size: 0.65rem;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--muted); margin-bottom: 0.4rem;
}
.f-input {
  width: 100%; padding: 0.9rem 1rem; margin-bottom: 1.25rem;
  background: var(--white); border: 1.5px solid var(--border);
  font-family: 'DM Sans', sans-serif; font-size: 0.9rem; color: var(--ink);
  outline: none; transition: border-color 0.15s, box-shadow 0.15s;
}
.f-input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(232,82,26,0.07); }
.f-input::placeholder { color: #bfb9ad; }
.f-input:read-only { background: var(--cream); cursor: default; }
.f-select {
  width: 100%; padding: 0.9rem 2.5rem 0.9rem 1rem; margin-bottom: 1.25rem;
  background: var(--white) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='7' viewBox='0 0 12 7'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2379746d' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat right 1rem center;
  border: 1.5px solid var(--border); appearance: none;
  font-family: 'DM Sans', sans-serif; font-size: 0.9rem; color: var(--ink);
  outline: none; transition: border-color 0.15s;
}
.f-select:focus { border-color: var(--accent); }
.f-textarea {
  width: 100%; padding: 0.9rem 1rem; margin-bottom: 1.25rem;
  background: var(--white); border: 1.5px solid var(--border);
  font-family: 'DM Sans', sans-serif; font-size: 0.9rem; color: var(--ink);
  outline: none; resize: vertical; min-height: 72px; transition: border-color 0.15s;
}
.f-textarea:focus { border-color: var(--accent); }

.btn-primary {
  width: 100%; padding: 0.95rem;
  background: var(--ink); color: var(--paper); border: none;
  font-family: 'Syne', sans-serif; font-weight: 700;
  font-size: 0.82rem; letter-spacing: 0.1em; text-transform: uppercase;
  cursor: pointer; transition: background 0.15s, transform 0.1s;
}
.btn-primary:hover { background: #1c1c2a; transform: translateY(-1px); }

.btn-accent {
  padding: 0.85rem 1.5rem; background: var(--accent); color: var(--white); border: none;
  font-family: 'Syne', sans-serif; font-weight: 700;
  font-size: 0.78rem; letter-spacing: 0.08em; text-transform: uppercase;
  cursor: pointer; transition: background 0.15s, transform 0.1s; display: inline-flex; align-items: center; gap: 0.4rem;
}
.btn-accent:hover { background: var(--accent-hover); transform: translateY(-1px); }
.btn-accent.full { width: 100%; justify-content: center; }

.btn-outline {
  padding: 0.75rem 1.25rem; background: transparent;
  border: 1.5px solid var(--border); color: var(--ink);
  font-family: 'Syne', sans-serif; font-weight: 700;
  font-size: 0.78rem; letter-spacing: 0.07em; text-transform: uppercase;
  cursor: pointer; transition: all 0.15s; display: inline-flex; align-items: center; gap: 0.4rem;
}
.btn-outline:hover { background: var(--ink); color: var(--paper); border-color: var(--ink); }

.btn-danger {
  padding: 0.85rem 1.5rem; background: var(--danger); color: var(--white); border: none;
  font-family: 'Syne', sans-serif; font-weight: 700;
  font-size: 0.78rem; letter-spacing: 0.08em; text-transform: uppercase;
  cursor: pointer; transition: background 0.15s, transform 0.1s; display: inline-flex; align-items: center; gap: 0.4rem;
}
.btn-danger:hover { background: #a01818; transform: translateY(-1px); }

.demo-box { margin-top: 2rem; padding: 1rem 1.1rem; background: var(--ink); }
.demo-box .demo-title { font-family: 'Syne', sans-serif; font-size: 0.62rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.5rem; }
.demo-box p { font-size: 0.78rem; color: rgba(255,255,255,0.45); line-height: 1.7; }

.link-btn {
  background: none; border: none; color: var(--accent); font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem; cursor: pointer; text-decoration: underline;
  text-underline-offset: 3px; margin-top: 1rem; display: block; text-align: center; width: 100%;
}

.reg-scroll { max-height: calc(100vh - 4rem); overflow-y: auto; }
.reg-section-label {
  font-family: 'Syne', sans-serif; font-size: 0.62rem; letter-spacing: 0.18em;
  text-transform: uppercase; color: var(--accent);
  margin: 1.5rem 0 0.75rem; display: flex; align-items: center; gap: 0.6rem;
}
.reg-section-label::after { content: ''; flex: 1; height: 1px; background: var(--border); }

/* ===== DESKTOP SHELL ===== */
.app-shell {
  display: flex; min-height: 100vh;
}

/* SIDEBAR */
.sidebar {
  width: var(--sidebar-w); background: var(--ink);
  display: flex; flex-direction: column;
  position: fixed; top: 0; left: 0; bottom: 0;
  z-index: 200; transition: transform 0.25s ease;
}
.sidebar-logo {
  padding: 1.75rem 1.5rem 1.25rem;
  border-bottom: 1px solid rgba(255,255,255,0.07);
}
.sidebar-logo .brand {
  font-family: 'Syne', sans-serif; font-weight: 800;
  font-size: 1.2rem; color: var(--paper); letter-spacing: -0.02em;
}
.sidebar-logo .brand span { color: var(--accent); }
.sidebar-logo .brand-sub {
  font-size: 0.7rem; color: rgba(255,255,255,0.35);
  font-weight: 300; margin-top: 0.15rem;
}

.sidebar-user {
  padding: 1.1rem 1.5rem;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  display: flex; align-items: center; gap: 0.75rem;
}
.sidebar-avatar {
  width: 2.25rem; height: 2.25rem; background: var(--accent);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.sidebar-name {
  font-family: 'Syne', sans-serif; font-weight: 700;
  font-size: 0.85rem; color: var(--paper);
}
.sidebar-role { font-size: 0.72rem; color: rgba(255,255,255,0.38); font-weight: 300; }
.sidebar-campus { 
  font-size: 0.65rem; color: rgba(255,255,255,0.3); 
  margin-top: 0.1rem; display: flex; align-items: center; gap: 0.2rem;
}

.ref-pill {
  display: inline-flex; align-items: center;
  background: rgba(201,162,39,0.12); border: 1px solid rgba(201,162,39,0.25);
  padding: 0.15rem 0.5rem; margin-top: 0.25rem;
  font-family: 'Syne', sans-serif; font-size: 0.62rem;
  letter-spacing: 0.1em; color: var(--gold);
}

.sidebar-nav { flex: 1; padding: 1rem 0; overflow-y: auto; }
.nav-item {
  display: flex; align-items: center; gap: 0.75rem;
  padding: 0.75rem 1.5rem; width: 100%; background: none; border: none;
  color: rgba(255,255,255,0.42); cursor: pointer;
  font-family: 'Syne', sans-serif; font-weight: 600;
  font-size: 0.8rem; letter-spacing: 0.06em; text-transform: uppercase;
  transition: color 0.13s, background 0.13s;
  text-align: left;
}
.nav-item:hover { color: rgba(255,255,255,0.75); background: rgba(255,255,255,0.04); }
.nav-item.active { color: var(--accent); background: rgba(232,82,26,0.1); }
.nav-item .nav-dot {
  width: 6px; height: 6px; border-radius: 50%; background: var(--accent);
  margin-left: auto; opacity: 0; transition: opacity 0.13s;
}
.nav-item.active .nav-dot { opacity: 1; }

.sidebar-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.07);
}
.logout-btn {
  display: flex; align-items: center; gap: 0.5rem; width: 100%;
  background: none; border: 1px solid rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.4); padding: 0.6rem 0.875rem;
  font-family: 'Syne', sans-serif; font-size: 0.72rem;
  letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer;
  transition: all 0.15s;
}
.logout-btn:hover { color: var(--paper); border-color: rgba(255,255,255,0.35); }

/* MAIN AREA */
.main-area {
  margin-left: var(--sidebar-w);
  flex: 1; display: flex; flex-direction: column; min-height: 100vh;
}

.topbar {
  background: var(--white); border-bottom: 1.5px solid var(--border);
  padding: 0.875rem 2rem;
  display: flex; align-items: center; justify-content: space-between;
  position: sticky; top: 0; z-index: 100;
}
.topbar-title {
  font-family: 'Syne', sans-serif; font-weight: 800;
  font-size: 1.35rem; color: var(--ink);
}
.topbar-eyebrow {
  font-family: 'Syne', sans-serif; font-size: 0.6rem;
  letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent);
  margin-bottom: 0.15rem;
}
.topbar-actions { display: flex; align-items: center; gap: 0.75rem; }

.page-content { padding: 2rem; flex: 1; max-width: 1400px; width: 100%; }

/* MOBILE HEADER (hidden on desktop) */
.mobile-header {
  display: none;
  background: var(--ink); padding: 0.875rem 1.1rem;
  align-items: center; justify-content: space-between;
  position: sticky; top: 0; z-index: 200;
}
.mobile-brand { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.05rem; color: var(--paper); }
.mobile-brand span { color: var(--accent); }
.mobile-menu-btn {
  background: none; border: 1px solid rgba(255,255,255,0.2);
  color: var(--paper); padding: 0.35rem; cursor: pointer; display: flex;
}
.mobile-content { display: none; padding: 1.1rem; padding-bottom: 5rem; }
.mobile-bottom-nav {
  display: none; position: fixed; bottom: 0; left: 0; right: 0;
  background: var(--ink); border-top: 1px solid rgba(255,255,255,0.08);
  padding: 0.4rem 0; z-index: 200;
}
.mobile-nav-btn {
  flex: 1; display: flex; flex-direction: column; align-items: center; gap: 0.2rem;
  padding: 0.45rem 0.25rem; background: none; border: none;
  color: rgba(255,255,255,0.32); cursor: pointer; transition: color 0.12s;
}
.mobile-nav-btn.active { color: var(--accent); }
.mobile-nav-label { font-family: 'Syne', sans-serif; font-size: 0.58rem; letter-spacing: 0.06em; text-transform: uppercase; }

/* SIDEBAR OVERLAY (mobile) */
.sidebar-overlay {
  display: none; position: fixed; inset: 0;
  background: rgba(0,0,0,0.6); z-index: 190;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .sidebar { transform: translateX(-100%); }
  .sidebar.open { transform: translateX(0); }
  .sidebar-overlay.open { display: block; }
  .main-area { margin-left: 0; }
  .topbar { display: none; }
  .page-content { display: none; }
  .mobile-header { display: flex; }
  .mobile-content { display: block; }
  .mobile-bottom-nav { display: flex; }
}

/* ===== CONTENT COMPONENTS ===== */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.fade-up { animation: fadeUp 0.22s ease both; }

/* GRID STATS */
.stats-grid { display: grid; gap: 1rem; margin-bottom: 1.5rem; }
.stats-grid-2 { grid-template-columns: 1fr 1fr; }
.stats-grid-4 { grid-template-columns: repeat(4, 1fr); }
.stats-grid-3 { grid-template-columns: repeat(3, 1fr); }
@media (max-width: 768px) {
  .stats-grid-4 { grid-template-columns: 1fr 1fr; }
  .stats-grid-3 { grid-template-columns: 1fr 1fr 1fr; }
}

.stat-card {
  padding: 1.5rem; position: relative; overflow: hidden;
}
.stat-card-dark { background: var(--ink); color: var(--paper); }
.stat-card-accent { background: var(--accent); color: var(--white); }
.stat-card-blue { background: var(--blue); color: var(--white); }
.stat-card-cream { background: var(--cream); border: 1.5px solid var(--border); color: var(--ink); }
.stat-card-white { background: var(--white); border: 1.5px solid var(--border); color: var(--ink); }
.stat-card-green { background: var(--green); color: var(--white); }
.stat-card-danger { background: var(--danger); color: var(--white); }

.stat-label {
  font-family: 'Syne', sans-serif; font-size: 0.65rem;
  letter-spacing: 0.12em; text-transform: uppercase; opacity: 0.55; margin-bottom: 0.4rem;
}
.stat-value {
  font-family: 'Syne', sans-serif; font-size: 2rem;
  font-weight: 800; line-height: 1; letter-spacing: -0.03em;
}
.stat-ghost {
  position: absolute; bottom: 0.75rem; right: 0.75rem;
  opacity: 0.1; width: 3rem; height: 3rem;
}

/* CARDS / SECTIONS */
.card {
  background: var(--white); border: 1.5px solid var(--border);
  margin-bottom: 1.25rem; overflow: hidden;
}
.card-header {
  padding: 1rem 1.5rem; border-bottom: 1.5px solid var(--border);
  display: flex; align-items: center; justify-content: space-between;
}
.card-title {
  font-family: 'Syne', sans-serif; font-size: 0.75rem;
  font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink);
}
.card-body { padding: 1.25rem 1.5rem; }

/* LEAD ITEMS */
.lead-row {
  padding: 1rem 1.5rem; border-bottom: 1.5px solid var(--border);
  display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem;
}
.lead-row:last-child { border-bottom: none; }
.lead-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.9rem; }
.lead-service { font-size: 0.8rem; color: var(--muted); margin-top: 0.15rem; font-weight: 300; }
.lead-date { font-size: 0.7rem; color: var(--muted); margin-top: 0.2rem; }
.lead-commission { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 0.95rem; color: var(--green); text-align: right; }
.lead-metrics { display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap; }
.metric-chip {
  background: var(--cream); padding: 0.3rem 0.6rem;
  font-size: 0.72rem; color: var(--ink);
}
.metric-chip strong { font-family: 'Syne', sans-serif; font-weight: 700; }

/* BADGES */
.badge {
  display: inline-block; padding: 0.2rem 0.6rem;
  font-family: 'Syne', sans-serif; font-size: 0.6rem;
  font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
}
.badge-green { background: #dcfce7; color: var(--green); }
.badge-yellow { background: #fef3c7; color: var(--warning); }
.badge-blue { background: #dbeafe; color: var(--blue); }
.badge-red { background: #fee2e2; color: var(--danger); }
.badge-pending { background: #fef3c7; color: var(--warning); }
.badge-active { background: #dcfce7; color: var(--green); }
.badge-inactive { background: #e5e5e5; color: var(--muted); }
.badge-super-admin { background: var(--ink); color: var(--gold); border: 1px solid var(--gold); }

/* ANNOUNCEMENTS */
.ann-item {
  padding: 1rem 1.5rem; border-bottom: 1.5px solid var(--border);
  border-left: 3px solid var(--accent);
}
.ann-item:last-child { border-bottom: none; }
.ann-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.85rem; margin-bottom: 0.25rem; }
.ann-body { font-size: 0.82rem; color: var(--muted); font-weight: 300; line-height: 1.5; }
.ann-date { font-size: 0.68rem; color: var(--muted); margin-top: 0.35rem; font-family: 'Syne', sans-serif; letter-spacing: 0.06em; }

/* QUICK ACTIONS */
.quick-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; }
.quick-btn {
  padding: 1.1rem 1.25rem; border: none; cursor: pointer;
  display: flex; align-items: center; justify-content: center; gap: 0.5rem;
  font-family: 'Syne', sans-serif; font-weight: 700;
  font-size: 0.78rem; letter-spacing: 0.07em; text-transform: uppercase;
  transition: transform 0.12s, opacity 0.12s;
}
.quick-btn:hover { transform: translateY(-2px); opacity: 0.88; }
.qb-dark { background: var(--ink); color: var(--paper); }
.qb-ghost { background: transparent; color: var(--ink); border: 1.5px solid var(--border); }
.qb-ghost:hover { background: var(--ink); color: var(--paper); border-color: var(--ink); }

/* BACK BTN */
.back-btn {
  display: inline-flex; align-items: center; gap: 0.4rem;
  background: none; border: none; color: var(--accent);
  font-family: 'Syne', sans-serif; font-size: 0.75rem;
  letter-spacing: 0.07em; text-transform: uppercase; font-weight: 700;
  cursor: pointer; padding: 0; margin-bottom: 1.5rem;
}
.back-btn:hover { opacity: 0.7; }

/* PAGE HEADER */
.pg-eyebrow { font-family: 'Syne', sans-serif; font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.25rem; }
.pg-title { font-family: 'Syne', sans-serif; font-size: 1.6rem; font-weight: 800; color: var(--ink); margin-bottom: 1.5rem; line-height: 1.1; }

/* FORM SECTIONS */
.form-card { background: var(--white); border: 1.5px solid var(--border); padding: 1.75rem; margin-bottom: 1.25rem; }
.form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 0 1.5rem; }
@media (max-width: 768px) { .form-grid-2 { grid-template-columns: 1fr; } }
.f-group { margin-bottom: 1.25rem; }

.commission-bar {
  background: var(--ink); padding: 1.1rem 1.5rem;
  display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;
}
.commission-label { font-family: 'Syne', sans-serif; font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.45); }
.commission-val { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 800; color: var(--gold); }

/* REFERRAL */
.ref-hero {
  background: var(--ink); padding: 2.5rem;
  margin-bottom: 1.25rem; text-align: center; position: relative; overflow: hidden;
}
.ref-hero::before {
  content: ''; position: absolute; top: -50%; left: -50%;
  width: 200%; height: 200%;
  background: radial-gradient(circle at center, rgba(232,82,26,0.07) 0%, transparent 60%);
}
.ref-code { font-family: 'Syne', sans-serif; font-size: 3rem; font-weight: 800; color: var(--gold); letter-spacing: 0.2em; margin: 0.75rem 0; }
.ref-eyebrow { font-family: 'Syne', sans-serif; font-size: 0.62rem; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.35); }
.ref-sub { font-size: 0.82rem; color: rgba(255,255,255,0.4); font-weight: 300; }

.ref-link-row { display: flex; overflow: hidden; border: 1.5px solid var(--border); }
.ref-link-input { flex: 1; padding: 0.875rem 1rem; background: var(--white); border: none; outline: none; font-size: 0.78rem; color: var(--muted); font-family: 'DM Sans', sans-serif; }
.ref-copy-btn {
  padding: 0 1.25rem; background: var(--ink); border: none;
  color: var(--paper); font-family: 'Syne', sans-serif; font-weight: 700;
  font-size: 0.72rem; letter-spacing: 0.07em; text-transform: uppercase;
  cursor: pointer; display: flex; align-items: center; gap: 0.35rem; transition: background 0.15s; white-space: nowrap;
}
.ref-copy-btn:hover { background: var(--accent); }

.step-list { padding: 0.5rem 0; }
.step-item { display: flex; align-items: flex-start; gap: 1rem; padding: 0.75rem 0; border-bottom: 1.5px solid var(--border); }
.step-item:last-child { border-bottom: none; }
.step-num { width: 1.75rem; height: 1.75rem; background: var(--accent); color: var(--white); display: flex; align-items: center; justify-content: center; font-family: 'Syne', sans-serif; font-weight: 800; font-size: 0.72rem; flex-shrink: 0; }
.step-text { font-size: 0.85rem; color: var(--ink); font-weight: 300; line-height: 1.55; padding-top: 0.15rem; }

/* PROFILE */
.profile-hero { background: var(--ink); padding: 2rem; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 1.25rem; }
.profile-avatar { width: 4.5rem; height: 4.5rem; background: var(--accent); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.profile-name { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.3rem; color: var(--paper); }
.profile-role { font-size: 0.78rem; color: rgba(255,255,255,0.4); margin-top: 0.2rem; }
.profile-campus { font-size: 0.82rem; color: rgba(255,255,255,0.55); margin-top: 0.1rem; font-weight: 300; }

.profile-fields { }
.pf-row {
  padding: 0.875rem 1.5rem; border-bottom: 1.5px solid var(--border);
  display: flex; align-items: center; gap: 1.5rem;
}
.pf-row:last-child { border-bottom: none; }
.pf-key { font-family: 'Syne', sans-serif; font-size: 0.65rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); min-width: 100px; flex-shrink: 0; }
.pf-val { font-size: 0.9rem; color: var(--ink); flex: 1; }
.pf-val input { background: none; border: none; outline: none; font-size: 0.9rem; font-family: 'DM Sans', sans-serif; color: var(--ink); width: 100%; }
.pf-val input:focus { border-bottom: 1.5px solid var(--accent); }

/* MANAGEMENT */
.approval-row {
  padding: 1rem 1.5rem; border-bottom: 1.5px solid var(--border);
  display: flex; justify-content: space-between; align-items: center; gap: 1rem;
}
.approval-row:last-child { border-bottom: none; }
.approval-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.88rem; }
.approval-meta { font-size: 0.75rem; color: var(--muted); font-weight: 300; margin-top: 0.1rem; }

.approve-btn {
  background: var(--green); color: var(--white); border: none;
  padding: 0.5rem 1.1rem; font-family: 'Syne', sans-serif; font-weight: 700;
  font-size: 0.72rem; letter-spacing: 0.06em; text-transform: uppercase;
  cursor: pointer; transition: opacity 0.12s; white-space: nowrap; flex-shrink: 0; display: flex; align-items: center; gap: 0.3rem;
}
.approve-btn:hover { opacity: 0.85; }

.reject-btn {
  background: var(--danger); color: var(--white); border: none;
  padding: 0.5rem 1.1rem; font-family: 'Syne', sans-serif; font-weight: 700;
  font-size: 0.72rem; letter-spacing: 0.06em; text-transform: uppercase;
  cursor: pointer; transition: opacity 0.12s; white-space: nowrap; flex-shrink: 0; display: flex; align-items: center; gap: 0.3rem;
}
.reject-btn:hover { opacity: 0.85; }

.performer-row { padding: 0.875rem 1.5rem; border-bottom: 1.5px solid var(--border); display: flex; align-items: center; gap: 1rem; }
.performer-row:last-child { border-bottom: none; }
.rank-badge { width: 1.75rem; height: 1.75rem; display: flex; align-items: center; justify-content: center; font-family: 'Syne', sans-serif; font-weight: 800; font-size: 0.72rem; flex-shrink: 0; }
.rank-gold { background: var(--gold); color: var(--white); }
.rank-silver { background: #8fa0b4; color: var(--white); }
.rank-bronze { background: #a06830; color: var(--white); }
.rank-default { background: var(--cream); color: var(--muted); border: 1.5px solid var(--border); }
.performer-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.88rem; }
.performer-meta { font-size: 0.75rem; color: var(--muted); font-weight: 300; }
.performer-earn { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 0.9rem; color: var(--green); margin-left: auto; }

/* REPORTS */
.month-row { padding: 1rem 1.5rem; border-bottom: 1.5px solid var(--border); }
.month-row:last-child { border-bottom: none; }
.month-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; }
.month-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.85rem; }
.month-count { font-family: 'Syne', sans-serif; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); background: var(--cream); padding: 0.2rem 0.5rem; }
.month-metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; }
.month-metric { background: var(--cream); padding: 0.6rem 0.8rem; }
.mm-label { font-family: 'Syne', sans-serif; font-size: 0.6rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }
.mm-val { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.05rem; color: var(--ink); margin-top: 0.1rem; }

.prog-row { padding: 0.875rem 1.5rem; border-bottom: 1.5px solid var(--border); display: flex; align-items: center; gap: 1rem; }
.prog-row:last-child { border-bottom: none; }
.prog-label { font-size: 0.82rem; min-width: 100px; font-weight: 300; color: var(--ink); }
.prog-track { flex: 1; height: 3px; background: var(--border); }
.prog-fill { height: 100%; }
.pf-green { background: var(--green); }
.pf-yellow { background: var(--gold); }
.pf-blue { background: var(--blue); }
.pf-red { background: var(--danger); }
.prog-count { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.78rem; color: var(--muted); min-width: 60px; text-align: right; }

/* AMBASSADOR CARDS */
.ambassador-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.ambassador-card {
  background: var(--white);
  border: 1.5px solid var(--border);
  overflow: hidden;
  transition: transform 0.12s, box-shadow 0.12s;
}
.ambassador-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.ambassador-header {
  padding: 1.25rem 1.25rem 0.75rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1.5px solid var(--border);
}

.ambassador-avatar {
  width: 3rem;
  height: 3rem;
  background: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.ambassador-info {
  flex: 1;
}

.ambassador-name {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.ambassador-body {
  padding: 1rem 1.25rem;
}

.ambassador-stat-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
}

.ambassador-stat-label {
  color: var(--muted);
  font-weight: 300;
}

.ambassador-stat-value {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
}

.ambassador-footer {
  padding: 0.75rem 1.25rem 1.25rem;
  border-top: 1.5px solid var(--border);
  display: flex;
  gap: 0.5rem;
}

.ambassador-action-btn {
  flex: 1;
  padding: 0.5rem;
  background: none;
  border: 1.5px solid var(--border);
  font-family: 'Syne', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  transition: all 0.12s;
}
.ambassador-action-btn:hover {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}

.ambassador-action-btn.accent {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--white);
}
.ambassador-action-btn.accent:hover {
  background: var(--accent-hover);
}

/* FILTER BAR */
.filter-bar {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.filter-select {
  padding: 0.5rem 1.5rem 0.5rem 0.75rem;
  background: var(--white);
  border: 1.5px solid var(--border);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: var(--ink);
  outline: none;
}

.filter-search {
  flex: 1;
  min-width: 200px;
  padding: 0.5rem 0.75rem;
  background: var(--white);
  border: 1.5px solid var(--border);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: var(--ink);
  outline: none;
}

.filter-search:focus {
  border-color: var(--accent);
}

/* TABS */
.tabs {
  display: flex;
  border-bottom: 1.5px solid var(--border);
  margin-bottom: 1.5rem;
  gap: 0.25rem;
  flex-wrap: wrap;
}

.tab {
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  cursor: pointer;
  transition: all 0.12s;
  border-bottom: 2px solid transparent;
}

.tab:hover {
  color: var(--ink);
}

.tab.active {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

/* ADMIN MANAGEMENT */
.admin-creation {
  background: var(--ink);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--paper);
}

.admin-campus-selector {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.campus-checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  cursor: pointer;
}

.campus-checkbox input[type="checkbox"] {
  width: 1rem;
  height: 1rem;
  accent-color: var(--accent);
}

/* EMPTY STATE */
.empty { text-align: center; padding: 3rem 1.5rem; }
.empty-ico { font-size: 2.5rem; opacity: 0.3; display: block; margin-bottom: 0.75rem; }
.empty-text { font-size: 0.9rem; color: var(--muted); font-weight: 300; }

/* DESKTOP ENHANCEMENTS */
@media (min-width: 769px) {
  .page-content { padding: 2rem 2.5rem; }
  .stats-grid-2 { grid-template-columns: 1fr 1fr; }
  .stats-grid-4 { grid-template-columns: repeat(4, 1fr); }
  .auth-card { max-width: 480px; }
  .ref-code { font-size: 3.5rem; }
  .topbar-title { font-size: 1.5rem; }
}

@media (min-width: 1100px) {
  :root { --sidebar-w: 280px; }
}

/* ===== UTILITY ===== */
.flex-between { display: flex; align-items: center; justify-content: space-between; }
.flex-center { display: flex; align-items: center; }
.gap-sm { gap: 0.5rem; }
.gap-md { gap: 1rem; }
.mb-sm { margin-bottom: 0.75rem; }
.mb-md { margin-bottom: 1.25rem; }
.mt-sm { margin-top: 0.5rem; }

/* NEW STYLES FOR LEAD ACTIONS */
.lead-actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
  flex-wrap: wrap;
}

.lead-action-btn {
  background: none;
  border: 1.5px solid var(--border);
  padding: 0.35rem 0.75rem;
  font-size: 0.7rem;
  font-family: 'Syne', sans-serif;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: var(--ink);
  transition: all 0.12s;
}

.lead-action-btn:hover {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}

.lead-action-btn.accent {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--white);
}

.lead-action-btn.accent:hover {
  background: var(--accent-hover);
}

.payment-history {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px dashed var(--border);
  font-size: 0.7rem;
  color: var(--muted);
}

.payment-item {
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0;
}

/* MODAL */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 1rem;
}

.modal-content {
  background: var(--paper);
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
  border: 2px solid var(--border);
  position: relative;
}

.modal-header {
  font-family: 'Syne', sans-serif;
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
  color: var(--ink);
}

.modal-sub {
  font-size: 0.8rem;
  color: var(--muted);
  margin-bottom: 1.5rem;
  font-weight: 300;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--muted);
}

.modal-close:hover {
  color: var(--accent);
}
`;

const CAP = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentView, setCurrentView] = useState('login');
  const [users, setUsers] = useState([]);
  const [leads, setLeads] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);
  const [selectedAmbassador, setSelectedAmbassador] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showAmbassadorModal, setShowAmbassadorModal] = useState(false);
  const [showAdminCreationModal, setShowAdminCreationModal] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [newAdminData, setNewAdminData] = useState({
    name: '',
    email: '',
    password: 'admin123',
    campus: [],
    role: 'Management'
  });
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: "Welcome to Campus Ambassador Program", content: "Complete your profile to start earning commissions!", date: "2024-08-25", postedBy: "Super Admin", campus: "All" },
    { id: 2, title: "Monthly Training Session", content: "Join us this Friday for sales training at 3 PM", date: "2024-08-24", postedBy: "Super Admin", campus: "All" }
  ]);

  // Available campuses
  const campuses = [
    "University of Lagos",
    "University of Ibadan",
    "University of Nigeria",
    "University of Benin",
    "Obafemi Awolowo University",
    "Ahmadu Bello University",
    "Lagos State University",
    "Covenant University",
    "Federal University of Technology, Akure",
    "University of Port Harcourt"
  ];

  useEffect(() => {
    // Initialize with demo data - Super Admin and pending ambassadors
    setUsers([
      { 
        id: 1, 
        email: 'super@company.com', 
        password: 'super123', 
        role: 'Super Admin', 
        name: 'Super Admin', 
        campus: 'All Campuses', 
        phone: '+234-800-000-0000', 
        department: 'Management', 
        status: 'active', 
        earnings: 0, 
        referralCode: 'SUPER001', 
        managedCampuses: ['All Campuses'],
        isSuperAdmin: true,
        dateJoined: '2024-01-01' 
      },
      { 
        id: 2, 
        email: 'admin@unilag.edu', 
        password: 'admin123', 
        role: 'Management', 
        name: 'Lagos Admin', 
        campus: 'University of Lagos', 
        phone: '+234-801-111-1111', 
        department: 'Management', 
        status: 'active', 
        earnings: 0, 
        referralCode: 'LAGADMIN', 
        managedCampuses: ['University of Lagos'],
        isSuperAdmin: false,
        dateJoined: '2024-01-15' 
      },
      { 
        id: 3, 
        email: 'john@uni.edu', 
        password: 'amb123', 
        role: 'Ambassador', 
        name: 'John Doe', 
        campus: 'University of Lagos', 
        phone: '+234-801-234-5678', 
        department: 'Computer Science', 
        status: 'active', 
        earnings: 35000, 
        referralCode: 'JOHN001',
        bankName: 'Access Bank',
        accountNumber: '1234567890',
        accountName: 'John Doe',
        homeAddress: 'Lagos Mainland',
        schoolAddress: 'Unilag',
        dateJoined: '2024-02-10' 
      },
      { 
        id: 4, 
        email: 'jane@uni.edu', 
        password: 'amb123', 
        role: 'Ambassador', 
        name: 'Jane Smith', 
        campus: 'University of Ibadan', 
        phone: '+234-802-345-6789', 
        department: 'Business Admin', 
        status: 'active', 
        earnings: 52000, 
        referralCode: 'JANE001',
        bankName: 'First Bank',
        accountNumber: '2345678901',
        accountName: 'Jane Smith',
        homeAddress: 'Ibadan',
        schoolAddress: 'UI',
        dateJoined: '2024-02-15' 
      },
      { 
        id: 5, 
        email: 'chioma@uni.edu', 
        password: 'amb123', 
        role: 'Ambassador', 
        name: 'Chioma Okonkwo', 
        campus: 'University of Benin', 
        phone: '+234-803-456-7890', 
        department: 'Mass Comm', 
        status: 'pending', 
        earnings: 0, 
        referralCode: 'CHIOMA001',
        bankName: 'Zenith Bank',
        accountNumber: '3456789012',
        accountName: 'Chioma Okonkwo',
        homeAddress: 'Benin City',
        schoolAddress: 'Uniben',
        dateJoined: '2024-08-20' 
      },
      { 
        id: 6, 
        email: 'peter@uni.edu', 
        password: 'amb123', 
        role: 'Ambassador', 
        name: 'Peter Obi', 
        campus: 'University of Nigeria', 
        phone: '+234-804-567-8901', 
        department: 'Marketing', 
        status: 'pending', 
        earnings: 0, 
        referralCode: 'PETER001',
        bankName: 'UBA',
        accountNumber: '4567890123',
        accountName: 'Peter Obi',
        homeAddress: 'Nsukka',
        schoolAddress: 'UNN',
        dateJoined: '2024-08-21' 
      }
    ]);
    
    setLeads([
      { id: 1, ambassadorId: 3, ambassadorName: 'John Doe', customerName: 'Sarah Johnson', contact: '+234-802-345-6789', service: 'Web Development Course', value: 50000, amountPaid: 30000, balance: 20000, status: 'Consultation', commission: 1500, dateAdded: '2024-08-20', paymentHistory: [{ amount: 30000, date: '2024-08-20', commission: 1500 }] },
      { id: 2, ambassadorId: 4, ambassadorName: 'Jane Smith', customerName: 'Michael Brown', contact: '+234-803-456-7890', service: 'Data Science Course', value: 75000, amountPaid: 75000, balance: 0, status: 'Converted', commission: 3750, dateAdded: '2024-08-15', paymentHistory: [{ amount: 75000, date: '2024-08-15', commission: 3750 }] },
      { id: 3, ambassadorId: 3, ambassadorName: 'John Doe', customerName: 'Amara Nnamdi', contact: '+234-805-678-9012', service: 'Mobile App Course', value: 60000, amountPaid: 20000, balance: 40000, status: 'New Lead', commission: 1000, dateAdded: '2024-08-22', paymentHistory: [{ amount: 20000, date: '2024-08-22', commission: 1000 }] }
    ]);
  }, []);

  const handleLogin = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      // Check if user is approved (active status)
      if (user.status === 'pending') {
        alert('Your account is pending approval. Please wait for admin verification.');
        return;
      }
      if (user.status === 'rejected') {
        alert('Your account has been rejected. Please contact support.');
        return;
      }
      if (user.status === 'suspended') {
        alert('Your account has been suspended. Please contact support.');
        return;
      }
      setCurrentUser(user); 
      setCurrentView('dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleRegister = (data) => {
    // Check if email already exists
    if (users.some(u => u.email === data.email)) {
      alert('Email already registered. Please use a different email.');
      return;
    }

    const newUser = { 
      ...data, 
      id: users.length + 1, 
      status: 'pending', 
      earnings: 0, 
      referralCode: `AMB${String(users.length + 1).padStart(3, '0')}`,
      dateJoined: new Date().toISOString().split('T')[0]
    };
    
    // Update users state with the new user
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers, newUser];
      console.log('New user registered:', newUser);
      console.log('Updated users list:', updatedUsers);
      return updatedUsers;
    });
    
    alert('Registration submitted! Your account is pending approval. You will be able to log in once approved.');
    setCurrentView('login');
  };

  const createAdmin = () => {
    // Only Super Admin can create other admins
    if (!currentUser || currentUser.role !== 'Super Admin') {
      alert('Only Super Admin can create new admins');
      return;
    }

    if (!newAdminData.name || !newAdminData.email || newAdminData.campus.length === 0) {
      alert('Please fill all required fields and select at least one campus');
      return;
    }

    // Check if email already exists
    if (users.some(u => u.email === newAdminData.email)) {
      alert('Email already exists');
      return;
    }

    const newAdmin = {
      id: users.length + 1,
      ...newAdminData,
      role: 'Management',
      status: 'active',
      earnings: 0,
      referralCode: `ADMIN${String(users.length + 1).padStart(3, '0')}`,
      isSuperAdmin: false,
      managedCampuses: newAdminData.campus,
      dateJoined: new Date().toISOString().split('T')[0]
    };

    setUsers(prev => [...prev, newAdmin]);
    setShowAdminCreationModal(false);
    setNewAdminData({
      name: '',
      email: '',
      password: 'admin123',
      campus: [],
      role: 'Management'
    });
    alert('Admin created successfully!');
  };

  const addLead = (data) => {
    const commission = Math.floor(data.amountPaid * 0.05);
    const newLead = { 
      ...data, 
      id: leads.length + 1, 
      ambassadorId: currentUser.id, 
      ambassadorName: currentUser.name, 
      commission, 
      dateAdded: new Date().toISOString().split('T')[0], 
      status: 'New Lead',
      paymentHistory: [{ amount: data.amountPaid, date: new Date().toISOString().split('T')[0], commission: commission }]
    };
    setLeads(p => [...p, newLead]);
    setUsers(p => p.map(u => u.id === currentUser.id ? { ...u, earnings: u.earnings + commission } : u));
    setCurrentUser(p => ({ ...p, earnings: p.earnings + commission }));
  };

  const updateLeadPayment = (leadId, additionalPayment) => {
    setLeads(prevLeads => {
      return prevLeads.map(lead => {
        if (lead.id === leadId) {
          const newAmountPaid = lead.amountPaid + additionalPayment;
          const newBalance = lead.value - newAmountPaid;
          const newStatus = newBalance <= 0 ? 'Converted' : 
                           (lead.status === 'New Lead' && newAmountPaid > 0 ? 'Consultation' : lead.status);
          
          const additionalCommission = Math.floor(additionalPayment * 0.05);
          
          setUsers(prevUsers => prevUsers.map(u => 
            u.id === lead.ambassadorId 
              ? { ...u, earnings: u.earnings + additionalCommission }
              : u
          ));
          
          if (currentUser.id === lead.ambassadorId) {
            setCurrentUser(prev => ({
              ...prev,
              earnings: prev.earnings + additionalCommission
            }));
          }
          
          return {
            ...lead,
            amountPaid: newAmountPaid,
            balance: newBalance,
            commission: (lead.commission || 0) + additionalCommission,
            status: newStatus,
            paymentHistory: [
              ...(lead.paymentHistory || []),
              {
                amount: additionalPayment,
                date: new Date().toISOString().split('T')[0],
                commission: additionalCommission
              }
            ]
          };
        }
        return lead;
      });
    });
    setShowPaymentModal(false);
    setPaymentAmount('');
    setSelectedLead(null);
    alert('Payment added successfully!');
  };

  const updateLeadStatus = (leadId, newStatus) => {
    setLeads(prevLeads => 
      prevLeads.map(lead => 
        lead.id === leadId ? { ...lead, status: newStatus } : lead
      )
    );
  };

  const approveAmbassador = (userId) => {
    setUsers(p => p.map(u => u.id === userId ? { ...u, status: 'active' } : u));
    alert('Ambassador approved! They can now log in.');
  };

  const rejectAmbassador = (userId) => {
    setUsers(p => p.map(u => u.id === userId ? { ...u, status: 'rejected' } : u));
    alert('Ambassador rejected.');
  };

  const suspendAmbassador = (userId) => {
    setUsers(p => p.map(u => u.id === userId ? { ...u, status: 'suspended' } : u));
    alert('Ambassador suspended.');
  };

  const activateAmbassador = (userId) => {
    setUsers(p => p.map(u => u.id === userId ? { ...u, status: 'active' } : u));
    alert('Ambassador activated.');
  };

  const addAnnouncement = (title, content) => {
    const newAnn = {
      id: announcements.length + 1,
      title,
      content,
      date: new Date().toISOString().split('T')[0],
      postedBy: currentUser.name,
      campus: currentUser.role === 'Super Admin' ? 'All' : currentUser.campus
    };
    setAnnouncements(prev => [newAnn, ...prev]);
  };

  const exportData = (type) => {
    let data;
    if (type === 'leads') {
      data = leads;
    } else if (type === 'ambassadors') {
      data = users.filter(u => u.role === 'Ambassador');
    } else {
      data = { leads, ambassadors: users.filter(u => u.role === 'Ambassador') };
    }
    
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${type}_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Check if current user can view this lead (based on campus)
  const canViewLead = (lead) => {
    if (!currentUser) return false;
    if (currentUser.role === 'Super Admin') return true;
    if (currentUser.role === 'Management') {
      const ambassador = users.find(u => u.id === lead.ambassadorId);
      return currentUser.managedCampuses?.includes(ambassador?.campus);
    }
    return lead.ambassadorId === currentUser.id;
  };

  // Check if current user can view this ambassador
  const canViewAmbassador = (ambassador) => {
    if (!currentUser) return false;
    if (currentUser.role === 'Super Admin') return true;
    if (currentUser.role === 'Management') {
      return currentUser.managedCampuses?.includes(ambassador.campus);
    }
    return false;
  };

  const Badge = ({ status }) => {
    const cls = status === 'Converted' || status === 'active' ? 'badge-green' : 
                status === 'Consultation' ? 'badge-yellow' : 
                status === 'pending' ? 'badge-pending' : 
                status === 'suspended' ? 'badge-red' :
                status === 'rejected' ? 'badge-red' :
                status === 'Super Admin' ? 'badge-super-admin' :
                'badge-blue';
    return <span className={`badge ${cls}`}>{status}</span>;
  };

  // Payment Modal Component
  const PaymentModal = () => {
    if (!showPaymentModal || !selectedLead) return null;
    
    return (
      <div className="modal-overlay" onClick={() => setShowPaymentModal(false)}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setShowPaymentModal(false)}>
            <X size={18} />
          </button>
          <div className="modal-header">Add Payment</div>
          <div className="modal-sub">
            <strong>Customer:</strong> {selectedLead.customerName}<br />
            <strong>Ambassador:</strong> {selectedLead.ambassadorName}<br />
            <strong>Balance:</strong> ₦{selectedLead.balance?.toLocaleString()}
          </div>
          
          <label className="f-label">Payment Amount (₦)</label>
          <input 
            className="f-input" 
            type="number" 
            placeholder="Enter amount" 
            value={paymentAmount}
            onChange={e => setPaymentAmount(e.target.value)}
            max={selectedLead.balance}
          />
          
          <div className="commission-bar" style={{ padding: '0.75rem 1rem', marginBottom: '1rem' }}>
            <div className="commission-label">Commission (5%)</div>
            <div className="commission-val" style={{ fontSize: '1.1rem' }}>
              ₦{Math.floor((parseInt(paymentAmount) || 0) * 0.05).toLocaleString()}
            </div>
          </div>
          
          <button 
            className="btn-accent full" 
            onClick={() => {
              const amount = parseInt(paymentAmount);
              if (!amount || amount <= 0) {
                alert('Please enter a valid amount');
                return;
              }
              if (amount > selectedLead.balance) {
                alert('Amount cannot exceed balance');
                return;
              }
              updateLeadPayment(selectedLead.id, amount);
            }}
          >
            <CreditCard size={14} /> Process Payment
          </button>
        </div>
      </div>
    );
  };

  // Admin Creation Modal
  const AdminCreationModal = () => {
    if (!showAdminCreationModal) return null;
    
    const toggleCampus = (campus) => {
      setNewAdminData(prev => {
        const campuses = [...prev.campus];
        if (campuses.includes(campus)) {
          return { ...prev, campus: campuses.filter(c => c !== campus) };
        } else {
          return { ...prev, campus: [...campuses, campus] };
        }
      });
    };
    
    return (
      <div className="modal-overlay" onClick={() => setShowAdminCreationModal(false)}>
        <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '600px' }}>
          <button className="modal-close" onClick={() => setShowAdminCreationModal(false)}>
            <X size={18} />
          </button>
          
          <div className="modal-header">Create New Admin</div>
          <div className="modal-sub">Assign campus administrators</div>
          
          <label className="f-label">Admin Name</label>
          <input 
            className="f-input" 
            placeholder="Full name" 
            value={newAdminData.name}
            onChange={e => setNewAdminData(prev => ({ ...prev, name: e.target.value }))}
          />
          
          <label className="f-label">Email Address</label>
          <input 
            className="f-input" 
            type="email" 
            placeholder="admin@campus.edu" 
            value={newAdminData.email}
            onChange={e => setNewAdminData(prev => ({ ...prev, email: e.target.value }))}
          />
          
          <label className="f-label">Default Password</label>
          <input 
            className="f-input" 
            value="admin123" 
            readOnly 
            style={{ background: 'var(--cream)' }}
          />
          
          <label className="f-label">Select Campuses to Manage</label>
          <div className="admin-campus-selector">
            {campuses.map(campus => (
              <label key={campus} className="campus-checkbox">
                <input 
                  type="checkbox" 
                  checked={newAdminData.campus.includes(campus)}
                  onChange={() => toggleCampus(campus)}
                />
                <span style={{ fontSize: '0.8rem' }}>{campus}</span>
              </label>
            ))}
          </div>
          
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
            <button className="btn-outline" style={{ flex: 1 }} onClick={() => setShowAdminCreationModal(false)}>
              Cancel
            </button>
            <button className="btn-accent" style={{ flex: 1 }} onClick={createAdmin}>
              <Shield size={14} /> Create Admin
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Ambassador Detail Modal
  const AmbassadorModal = () => {
    if (!showAmbassadorModal || !selectedAmbassador) return null;
    
    const ambassadorLeads = leads.filter(l => l.ambassadorId === selectedAmbassador.id);
    const totalRevenue = ambassadorLeads.reduce((sum, l) => sum + (l.amountPaid || 0), 0);
    const totalCommission = ambassadorLeads.reduce((sum, l) => sum + (l.commission || 0), 0);
    const convertedLeads = ambassadorLeads.filter(l => l.status === 'Converted').length;
    
    return (
      <div className="modal-overlay" onClick={() => setShowAmbassadorModal(false)}>
        <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '600px' }}>
          <button className="modal-close" onClick={() => setShowAmbassadorModal(false)}>
            <X size={18} />
          </button>
          
          <div className="modal-header">Ambassador Profile</div>
          <div className="modal-sub">Detailed information and performance</div>
          
          <div className="profile-hero" style={{ padding: '1.5rem', marginBottom: '1.25rem' }}>
            <div className="profile-avatar" style={{ width: '3.5rem', height: '3.5rem' }}>
              <User size={24} color="white" />
            </div>
            <div>
              <div className="profile-name" style={{ fontSize: '1.1rem' }}>{selectedAmbassador.name}</div>
              <div className="profile-role">{selectedAmbassador.campus} · {selectedAmbassador.department}</div>
              <div style={{ marginTop: '0.25rem' }}>
                <Badge status={selectedAmbassador.status} />
              </div>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div className="stat-card stat-card-dark" style={{ padding: '1rem' }}>
              <div className="stat-label">Total Leads</div>
              <div className="stat-value" style={{ fontSize: '1.2rem' }}>{ambassadorLeads.length}</div>
            </div>
            <div className="stat-card stat-card-blue" style={{ padding: '1rem' }}>
              <div className="stat-label">Converted</div>
              <div className="stat-value" style={{ fontSize: '1.2rem' }}>{convertedLeads}</div>
            </div>
            <div className="stat-card stat-card-accent" style={{ padding: '1rem' }}>
              <div className="stat-label">Commission</div>
              <div className="stat-value" style={{ fontSize: '1.2rem' }}>₦{totalCommission.toLocaleString()}</div>
            </div>
            <div className="stat-card stat-card-green" style={{ padding: '1rem' }}>
              <div className="stat-label">Revenue</div>
              <div className="stat-value" style={{ fontSize: '1.2rem' }}>₦{totalRevenue.toLocaleString()}</div>
            </div>
          </div>
          
          <div className="card" style={{ marginBottom: '1.25rem' }}>
            <div className="card-header">
              <span className="card-title">Personal Information</span>
            </div>
            <div className="profile-fields">
              <div className="pf-row"><span className="pf-key">Email</span><span className="pf-val">{selectedAmbassador.email}</span></div>
              <div className="pf-row"><span className="pf-key">Phone</span><span className="pf-val">{selectedAmbassador.phone}</span></div>
              <div className="pf-row"><span className="pf-key">Referral Code</span><span className="pf-val" style={{ fontFamily: 'Syne', fontWeight: 800, color: 'var(--accent)' }}>{selectedAmbassador.referralCode}</span></div>
              <div className="pf-row"><span className="pf-key">Date Joined</span><span className="pf-val">{selectedAmbassador.dateJoined}</span></div>
            </div>
          </div>
          
          <div className="card" style={{ marginBottom: '1.25rem' }}>
            <div className="card-header">
              <span className="card-title">Bank Details</span>
            </div>
            <div className="profile-fields">
              <div className="pf-row"><span className="pf-key">Bank Name</span><span className="pf-val">{selectedAmbassador.bankName || '—'}</span></div>
              <div className="pf-row"><span className="pf-key">Account Number</span><span className="pf-val">{selectedAmbassador.accountNumber || '—'}</span></div>
              <div className="pf-row"><span className="pf-key">Account Name</span><span className="pf-val">{selectedAmbassador.accountName || '—'}</span></div>
            </div>
          </div>
          
          <div className="card">
            <div className="card-header">
              <span className="card-title">Recent Leads</span>
            </div>
            {ambassadorLeads.slice(-3).reverse().map(l => (
              <div className="lead-row" key={l.id}>
                <div>
                  <div className="lead-name">{l.customerName}</div>
                  <div className="lead-service">{l.service}</div>
                  <div className="lead-date">{l.dateAdded}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="lead-commission">₦{l.commission?.toLocaleString()}</div>
                  <Badge status={l.status} />
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
            {selectedAmbassador.status === 'active' && (
              <button className="btn-danger" style={{ flex: 1 }} onClick={() => {
                suspendAmbassador(selectedAmbassador.id);
                setShowAmbassadorModal(false);
              }}>
                <UserX size={14} /> Suspend
              </button>
            )}
            {selectedAmbassador.status === 'suspended' && (
              <button className="btn-accent" style={{ flex: 1 }} onClick={() => {
                activateAmbassador(selectedAmbassador.id);
                setShowAmbassadorModal(false);
              }}>
                <UserCheck size={14} /> Activate
              </button>
            )}
            {selectedAmbassador.status === 'pending' && (
              <>
                <button className="approve-btn" style={{ flex: 1 }} onClick={() => {
                  approveAmbassador(selectedAmbassador.id);
                  setShowAmbassadorModal(false);
                }}>
                  <CheckCircle size={14} /> Approve
                </button>
                <button className="reject-btn" style={{ flex: 1 }} onClick={() => {
                  rejectAmbassador(selectedAmbassador.id);
                  setShowAmbassadorModal(false);
                }}>
                  <X size={14} /> Reject
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  // ---- AUTH SCREENS ----
  const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    return (
      <div className="auth-wrap">
        <div className="auth-card fade-up">
          <div className="auth-eyebrow">🔥 Earn While You Learn</div>
          <h1 className="auth-title">Campus<br/>Ambassador</h1>
          <p className="auth-sub">Sign in to your account to continue</p>
          <label className="f-label">Email Address</label>
          <input className="f-input" type="email" placeholder="you@university.edu" value={email} onChange={e => setEmail(e.target.value)} />
          <label className="f-label">Password</label>
          <input className="f-input" type="password" placeholder="••••••••" value={pw} onChange={e => setPw(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleLogin(email, pw)} />
          <button className="btn-primary" onClick={() => handleLogin(email, pw)}>Sign In →</button>
          <button className="link-btn" onClick={() => setCurrentView('register')}>New here? Register as Ambassador</button>
          <div className="demo-box">
            <p className="demo-title">Demo Accounts</p>
            <p>Super Admin: super@company.com / super123</p>
            <p>Campus Admin: admin@unilag.edu / admin123</p>
            <p>Active Ambassador: john@uni.edu / amb123</p>
            <p>Pending Ambassador: chioma@uni.edu / amb123</p>
            <p style={{ marginTop: '0.5rem', color: 'var(--gold)' }}>New registrations require approval</p>
          </div>
        </div>
      </div>
    );
  };

  const RegisterScreen = () => {
    const [d, setD] = useState({ 
      name: '', 
      email: '', 
      password: '', 
      campus: '', 
      phone: '', 
      department: '', 
      homeAddress: '', 
      schoolAddress: '', 
      bankName: '', 
      accountNumber: '', 
      accountName: '', 
      role: 'Ambassador' 
    });
    
    const s = (k, v) => setD(p => ({ ...p, [k]: v }));
    
    return (
      <div className="auth-wrap" style={{ alignItems: 'flex-start', padding: '2rem 1.5rem' }}>
        <div className="auth-card fade-up reg-scroll" style={{ maxWidth: 520, margin: '0 auto' }}>
          <button className="back-btn" onClick={() => setCurrentView('login')}><ArrowLeft size={13} /> Back</button>
          <div className="auth-eyebrow">Join the Network</div>
          <h2 className="auth-title" style={{ fontSize: '1.8rem' }}>Create Account</h2>
          <p className="auth-sub">Fill in your details to get started</p>

          <div className="reg-section-label">Personal Info</div>
          <div className="form-grid-2">
            <div><label className="f-label">Full Name *</label><input className="f-input" placeholder="Your full name" value={d.name} onChange={e => s('name', e.target.value)} /></div>
            <div><label className="f-label">Email *</label><input className="f-input" type="email" placeholder="you@university.edu" value={d.email} onChange={e => s('email', e.target.value)} /></div>
            <div><label className="f-label">Password *</label><input className="f-input" type="password" placeholder="Strong password" value={d.password} onChange={e => s('password', e.target.value)} /></div>
            <div><label className="f-label">Phone *</label><input className="f-input" type="tel" placeholder="+234-..." value={d.phone} onChange={e => s('phone', e.target.value)} /></div>
          </div>

          <div className="reg-section-label">Academic Info</div>
          <div className="form-grid-2">
            <div><label className="f-label">University / Campus *</label>
              <select className="f-select" value={d.campus} onChange={e => s('campus', e.target.value)}>
                <option value="">Select your campus</option>
                {campuses.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div><label className="f-label">Department / Faculty *</label><input className="f-input" placeholder="Computer Science" value={d.department} onChange={e => s('department', e.target.value)} /></div>
          </div>
          <div><label className="f-label">Home Address</label><textarea className="f-textarea" placeholder="Your home address" value={d.homeAddress} onChange={e => s('homeAddress', e.target.value)} /></div>
          <div><label className="f-label">School Address</label><textarea className="f-textarea" placeholder="Campus address" value={d.schoolAddress} onChange={e => s('schoolAddress', e.target.value)} /></div>

          <div className="reg-section-label">Bank Details</div>
          <div className="form-grid-2">
            <div><label className="f-label">Bank Name *</label><input className="f-input" placeholder="GTBank, Access..." value={d.bankName} onChange={e => s('bankName', e.target.value)} /></div>
            <div><label className="f-label">Account Number *</label><input className="f-input" placeholder="10-digit number" value={d.accountNumber} onChange={e => s('accountNumber', e.target.value)} /></div>
          </div>
          <div><label className="f-label">Account Name *</label><input className="f-input" placeholder="As on account" value={d.accountName} onChange={e => s('accountName', e.target.value)} /></div>

          <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--cream)', border: '1px solid var(--border)', fontSize: '0.8rem' }}>
            <strong>Note:</strong> Your account will require admin approval before you can log in. You'll be notified once approved.
          </div>

          <button className="btn-primary" style={{ marginTop: '1rem' }} onClick={() => handleRegister(d)}>Submit Application →</button>
        </div>
      </div>
    );
  };

  // ---- APP VIEWS ----
  const Dashboard = () => {
    const myLeads = leads.filter(l => l.ambassadorId === currentUser.id);
    const commission = myLeads.reduce((s, l) => s + (l.commission || 0), 0);
    const converted = myLeads.filter(l => l.status === 'Converted').length;
    
    // Filter announcements by campus
    const relevantAnnouncements = announcements.filter(a => 
      a.campus === 'All' || a.campus === currentUser.campus
    );
    
    return (
      <div className="fade-up">
        <div className="stats-grid stats-grid-4">
          <div className="stat-card stat-card-dark"><div className="stat-label">Total Leads</div><div className="stat-value">{myLeads.length}</div><Users className="stat-ghost" /></div>
          <div className="stat-card stat-card-blue"><div className="stat-label">Converted</div><div className="stat-value">{converted}</div><TrendingUp className="stat-ghost" /></div>
          <div className="stat-card stat-card-accent" style={{ gridColumn: 'span 2' }}><div className="stat-label">Total Earnings</div><div className="stat-value">₦{commission.toLocaleString()}</div><DollarSign className="stat-ghost" style={{ width: '4rem', height: '4rem' }} /></div>
        </div>

        <div className="quick-row">
          <button className="quick-btn qb-dark" onClick={() => setCurrentView('addLead')}><Plus size={15} /> Add Lead</button>
          <button className="quick-btn qb-ghost" onClick={() => setCurrentView('referral')}><Share2 size={15} /> Share Link</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          <div className="card">
            <div className="card-header">
              <span className="card-title">Recent Leads</span>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent)', fontFamily: 'Syne', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.2rem' }} onClick={() => setCurrentView('leads')}>All <ChevronRight size={11} /></button>
            </div>
            {myLeads.length === 0 ? <div className="empty"><span className="empty-ico">📋</span><div className="empty-text">No leads yet — add one to start earning!</div></div>
              : myLeads.slice(-4).reverse().map(l => (
                <div className="lead-row" key={l.id}>
                  <div><div className="lead-name">{l.customerName}</div><div className="lead-service">{l.service}</div><div className="lead-date">{l.dateAdded}</div></div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}><div className="lead-commission">₦{l.commission?.toLocaleString()}</div><Badge status={l.status} /></div>
                </div>
              ))}
          </div>
          <div className="card">
            <div className="card-header"><span className="card-title"><Bell size={12} style={{ display: 'inline', marginRight: 6 }} />Announcements</span></div>
            {relevantAnnouncements.length === 0 ? (
              <div className="empty"><span className="empty-ico">🔔</span><div className="empty-text">No announcements</div></div>
            ) : (
              relevantAnnouncements.map(a => (
                <div className="ann-item" key={a.id}>
                  <div className="ann-title">{a.title}</div>
                  <div className="ann-body">{a.content}</div>
                  <div className="ann-date">{a.date} · by {a.postedBy}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  };

  const AddLeadForm = () => {
    const [d, setD] = useState({ customerName: '', contact: '', service: '', value: '', amountPaid: '', balance: '', supportAmbassador: '' });
    const s = (k, v) => setD(p => ({ ...p, [k]: v }));
    const commission = Math.floor((parseInt(d.amountPaid) || 0) * 0.05);
    const submit = () => {
      if (!d.customerName || !d.contact || !d.service || !d.value || !d.amountPaid) { alert('Please fill all required fields'); return; }
      addLead({ ...d, value: parseInt(d.value), amountPaid: parseInt(d.amountPaid), balance: parseInt(d.balance) || 0 });
      alert('Lead added successfully!'); setCurrentView('leads');
    };
    return (
      <div className="fade-up">
        <button className="back-btn" onClick={() => setCurrentView('dashboard')}><ArrowLeft size={13} /> Back</button>
        <div className="pg-eyebrow">New Entry</div>
        <div className="pg-title" style={{ marginBottom: '1.25rem' }}>Add Lead</div>
        <div className="form-card">
          <div className="form-grid-2">
            <div className="f-group"><label className="f-label">Customer Name *</label><input className="f-input" style={{ marginBottom: 0 }} placeholder="Full name" value={d.customerName} onChange={e => s('customerName', e.target.value)} /></div>
            <div className="f-group"><label className="f-label">Phone / Contact *</label><input className="f-input" style={{ marginBottom: 0 }} type="tel" placeholder="+234-..." value={d.contact} onChange={e => s('contact', e.target.value)} /></div>
            <div className="f-group" style={{ gridColumn: 'span 1' }}><label className="f-label">Service *</label>
              <select className="f-select" style={{ marginBottom: 0 }} value={d.service} onChange={e => s('service', e.target.value)}>
                <option value="">Select service</option>
                {['Web Development Course', 'Mobile App Course', 'Digital Marketing Course', 'Data Science Course', 'UI/UX Design Course'].map(sv => <option key={sv}>{sv}</option>)}
              </select>
            </div>
            <div className="f-group"><label className="f-label">Service Value (₦) *</label><input className="f-input" style={{ marginBottom: 0 }} type="number" placeholder="e.g. 50000" value={d.value} onChange={e => { s('value', e.target.value); s('balance', String((parseInt(e.target.value) || 0) - (parseInt(d.amountPaid) || 0))); }} /></div>
            <div className="f-group"><label className="f-label">Amount Paid (₦) *</label><input className="f-input" style={{ marginBottom: 0 }} type="number" placeholder="e.g. 30000" value={d.amountPaid} onChange={e => { const p = parseInt(e.target.value) || 0; s('amountPaid', e.target.value); s('balance', String((parseInt(d.value) || 0) - p)); }} /></div>
            <div className="f-group"><label className="f-label">Balance (₦)</label><input className="f-input" style={{ marginBottom: 0, background: 'var(--cream)' }} type="number" value={d.balance} readOnly /></div>
            <div className="f-group" style={{ gridColumn: 'span 2' }}><label className="f-label">Support Ambassador (Optional)</label><input className="f-input" style={{ marginBottom: 0 }} placeholder="Referral code of supporting ambassador" value={d.supportAmbassador} onChange={e => s('supportAmbassador', e.target.value)} /></div>
          </div>
        </div>
        <div className="commission-bar">
          <div><div className="commission-label">Your Commission (5%)</div><div className="commission-val">₦{commission.toLocaleString()}</div></div>
          <Zap size={30} color="rgba(201,162,39,0.35)" />
        </div>
        <button className="btn-accent full" onClick={submit}>Submit Lead →</button>
      </div>
    );
  };

  const LeadsView = () => {
    let filteredLeads = leads;
    
    if (currentUser.role === 'Ambassador') {
      filteredLeads = leads.filter(l => l.ambassadorId === currentUser.id);
    } else if (currentUser.role === 'Management') {
      // Campus admin sees leads from their campuses
      filteredLeads = leads.filter(l => {
        const ambassador = users.find(u => u.id === l.ambassadorId);
        return currentUser.managedCampuses?.includes(ambassador?.campus);
      });
    }
    // Super Admin sees all leads
    
    const handleStatusChange = (leadId, newStatus) => {
      updateLeadStatus(leadId, newStatus);
    };

    return (
      <div className="fade-up">
        <PaymentModal />
        <div className="flex-between mb-md">
          <div><div className="pg-eyebrow">Pipeline</div><div className="pg-title" style={{ marginBottom: 0 }}>Leads</div></div>
          {currentUser.role === 'Ambassador' && (
            <button className="btn-accent" onClick={() => setCurrentView('addLead')}><Plus size={14} /> New Lead</button>
          )}
        </div>
        
        {(currentUser.role === 'Management' || currentUser.role === 'Super Admin') && (
          <div className="filter-bar">
            <select className="filter-select" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
              <option value="all">All Status</option>
              <option value="New Lead">New Lead</option>
              <option value="Consultation">Consultation</option>
              <option value="Converted">Converted</option>
            </select>
            <input 
              className="filter-search" 
              type="text" 
              placeholder="Search by customer or ambassador..." 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <button className="btn-outline" onClick={() => exportData('leads')}>
              <Download size={13} /> Export
            </button>
          </div>
        )}
        
        <div className="card">
          {filteredLeads.length === 0 ? <div className="empty"><span className="empty-ico">📊</span><div className="empty-text">No leads yet.</div></div>
            : filteredLeads
              .filter(l => {
                if (filterStatus !== 'all' && l.status !== filterStatus) return false;
                if (searchTerm) {
                  const term = searchTerm.toLowerCase();
                  return l.customerName.toLowerCase().includes(term) || 
                         l.ambassadorName?.toLowerCase().includes(term) ||
                         l.contact.includes(term);
                }
                return true;
              })
              .map(l => (
              <div className="lead-row" key={l.id} style={{ flexDirection: 'column', alignItems: 'stretch' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <div className="lead-name">{l.customerName}</div>
                    {(currentUser.role === 'Management' || currentUser.role === 'Super Admin') && (
                      <div className="lead-service" style={{ color: 'var(--accent)' }}>
                        <User size={10} style={{ display: 'inline', marginRight: 3 }} /> {l.ambassadorName}
                      </div>
                    )}
                    <div className="lead-service">{l.service}</div>
                    <div className="lead-metrics">
                      <span className="metric-chip"><Phone size={10} style={{ display: 'inline', marginRight: 3 }} />{l.contact}</span>
                      <span className="metric-chip">Paid: <strong>₦{l.amountPaid?.toLocaleString()}</strong></span>
                      <span className="metric-chip">Bal: <strong>₦{l.balance?.toLocaleString()}</strong></span>
                      <span className="metric-chip">Total: <strong>₦{l.value?.toLocaleString()}</strong></span>
                    </div>
                    <div className="lead-date">{l.dateAdded}</div>
                    
                    {l.paymentHistory && l.paymentHistory.length > 1 && (
                      <div className="payment-history">
                        {l.paymentHistory.slice(-3).map((p, i) => (
                          <div key={i} className="payment-item">
                            <span>{p.date}: ₦{p.amount.toLocaleString()}</span>
                            <span style={{ color: 'var(--green)' }}>+₦{p.commission.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div className="lead-commission">₦{l.commission?.toLocaleString()}</div>
                    <Badge status={l.status} />
                  </div>
                </div>

                <div className="lead-actions">
                  {l.balance > 0 && (
                    <button 
                      className="lead-action-btn accent"
                      onClick={() => {
                        setSelectedLead(l);
                        setPaymentAmount('');
                        setShowPaymentModal(true);
                      }}
                    >
                      <CreditCard size={12} /> Add Payment
                    </button>
                  )}
                  
                  {(currentUser.role === 'Management' || currentUser.role === 'Super Admin') && l.status !== 'Converted' && (
                    <>
                      <button 
                        className="lead-action-btn"
                        onClick={() => handleStatusChange(l.id, 'Consultation')}
                      >
                        <Clock size={12} /> Consultation
                      </button>
                      <button 
                        className="lead-action-btn"
                        onClick={() => handleStatusChange(l.id, 'Converted')}
                      >
                        <CheckCircle size={12} /> Mark Converted
                      </button>
                    </>
                  )}
                  
                  {l.ambassadorId === currentUser.id && l.status !== 'Converted' && (
                    <button 
                      className="lead-action-btn"
                      onClick={() => {
                        setSelectedLead(l);
                        setPaymentAmount('');
                        setShowPaymentModal(true);
                      }}
                    >
                      <Edit2 size={12} /> Update Payment
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };

  const ReferralView = () => {
    const link = `https://company.com/register?ref=${currentUser.referralCode}`;
    return (
      <div className="fade-up">
        <div className="pg-eyebrow">Growth</div>
        <div className="pg-title">Referral Program</div>
        <div className="ref-hero">
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="ref-eyebrow">Your Referral Code</div>
            <div className="ref-code">{currentUser.referralCode}</div>
            <div className="ref-sub">Share this code and earn 5% on every successful conversion</div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          <div className="card">
            <div className="card-header"><span className="card-title">Your Referral Link</span></div>
            <div style={{ padding: '1.1rem 1.5rem' }}>
              <div className="ref-link-row">
                <input className="ref-link-input" value={link} readOnly />
                <button className="ref-copy-btn" onClick={() => { navigator.clipboard.writeText(link); alert('Copied!'); }}><Copy size={13} /> Copy</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header"><span className="card-title">How It Works</span></div>
            <div className="step-list" style={{ padding: '0.5rem 1.5rem 1.25rem' }}>
              {[['Share your referral link or code with potential students', '01'], ['When they purchase, add them as a lead in the system', '02'], ['Earn 5% commission on every successful conversion', '03']].map(([txt, n]) => (
                <div className="step-item" key={n}><div className="step-num">{n}</div><div className="step-text">{txt}</div></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProfileView = () => {
    const [editing, setEditing] = useState(false);
    const [pd, setPd] = useState({ ...currentUser });
    const save = () => { setUsers(p => p.map(u => u.id === currentUser.id ? pd : u)); setCurrentUser(pd); setEditing(false); };
    const myLeads = leads.filter(l => l.ambassadorId === currentUser.id);
    return (
      <div className="fade-up">
        <div className="flex-between mb-md">
          <div><div className="pg-eyebrow">Account</div><div className="pg-title" style={{ marginBottom: 0 }}>Profile</div></div>
          {currentUser.role === 'Ambassador' && (
            <button className={editing ? 'btn-accent' : 'btn-outline'} onClick={() => editing ? save() : setEditing(true)}>
              {editing ? 'Save Changes' : 'Edit Profile'}
            </button>
          )}
        </div>
        <div className="profile-hero" style={{ marginBottom: '1.25rem' }}>
          <div className="profile-avatar"><User size={28} color="white" /></div>
          <div>
            <div className="profile-name">{currentUser.name}</div>
            <div className="profile-role">
              {currentUser.role} 
              {currentUser.role === 'Management' && currentUser.managedCampuses && (
                <span style={{ marginLeft: '0.5rem', color: 'var(--gold)' }}>
                  ({currentUser.managedCampuses.join(', ')})
                </span>
              )}
            </div>
            <div className="profile-campus">{currentUser.campus}</div>
            <Badge status={currentUser.status} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.25rem' }}>
          <div className="card profile-fields">
            {[
              ['Full Name', 'name'], 
              ['Email Address', 'email'], 
              ['Phone', 'phone'], 
              ['Department', 'department'], 
              ['Campus', 'campus'],
              ...(currentUser.role === 'Ambassador' ? [
                ['Bank Name', 'bankName'],
                ['Account Number', 'accountNumber'],
                ['Account Name', 'accountName'],
                ['Home Address', 'homeAddress'],
                ['School Address', 'schoolAddress']
              ] : [])
            ].map(([label, key]) => (
              <div className="pf-row" key={key}>
                <div className="pf-key">{label}</div>
                <div className="pf-val">
                  <input 
                    value={pd[key] || ''} 
                    onChange={e => setPd(p => ({ ...p, [key]: e.target.value }))} 
                    disabled={!editing || currentUser.role !== 'Ambassador'} 
                    style={(!editing || currentUser.role !== 'Ambassador') ? { pointerEvents: 'none' } : {}} 
                  />
                </div>
              </div>
            ))}
            <div className="pf-row">
              <div className="pf-key">Referral Code</div>
              <div className="pf-val" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '0.95rem', color: 'var(--accent)', letterSpacing: '0.1em' }}>{currentUser.referralCode}</span>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)' }} onClick={() => { navigator.clipboard.writeText(currentUser.referralCode); alert('Copied!'); }}><Copy size={13} /></button>
              </div>
            </div>
          </div>
          <div>
            <div className="stat-card stat-card-dark" style={{ marginBottom: '1rem' }}>
              <div className="stat-label">Total Leads</div>
              <div className="stat-value">{myLeads.length}</div>
            </div>
            <div className="stat-card stat-card-accent">
              <div className="stat-label">Total Earnings</div>
              <div className="stat-value" style={{ fontSize: '1.4rem' }}>₦{currentUser.earnings?.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ManagementDashboard = () => {
    const [newAnnTitle, setNewAnnTitle] = useState('');
    const [newAnnContent, setNewAnnContent] = useState('');
    const [showAnnForm, setShowAnnForm] = useState(false);
    
    // Filter data based on admin's campus permissions
    const visibleAmbassadors = users.filter(u => u.role === 'Ambassador' && canViewAmbassador(u));
    const visibleLeads = leads.filter(canViewLead);
    
    const totalLeads = visibleLeads.length;
    const convertedLeads = visibleLeads.filter(l => l.status === 'Converted').length;
    const conversionRate = totalLeads > 0 ? ((convertedLeads / totalLeads) * 100).toFixed(1) : 0;
    const totalRevenue = visibleLeads.reduce((s, l) => s + (l.amountPaid || 0), 0);
    const totalCommission = visibleLeads.reduce((s, l) => s + (l.commission || 0), 0);
    
    const pendingAmbassadors = visibleAmbassadors.filter(u => u.status === 'pending');
    const activeAmbassadors = visibleAmbassadors.filter(u => u.status === 'active');
    const suspendedAmbassadors = visibleAmbassadors.filter(u => u.status === 'suspended');
    
    const recentLeads = [...visibleLeads].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)).slice(0, 5);
    
    const topPerformers = visibleAmbassadors
      .filter(u => u.status === 'active')
      .sort((a, b) => b.earnings - a.earnings)
      .slice(0, 5);
    
    const handleAddAnnouncement = () => {
      if (!newAnnTitle || !newAnnContent) {
        alert('Please fill both fields');
        return;
      }
      addAnnouncement(newAnnTitle, newAnnContent);
      setNewAnnTitle('');
      setNewAnnContent('');
      setShowAnnForm(false);
    };
    
    return (
      <div className="fade-up">
        <PaymentModal />
        <AmbassadorModal />
        <AdminCreationModal />
        
        <div className="flex-between mb-md">
          <div>
            <div className="pg-eyebrow">
              {currentUser.role === 'Super Admin' ? 'Super Admin' : 'Campus Admin'}
            </div>
            <div className="pg-title" style={{ marginBottom: 0 }}>
              Management Dashboard
              {currentUser.role === 'Management' && (
                <span style={{ fontSize: '0.8rem', marginLeft: '1rem', color: 'var(--muted)' }}>
                  Managing: {currentUser.managedCampuses?.join(', ')}
                </span>
              )}
            </div>
          </div>
          <div className="flex-center gap-sm">
            {currentUser.role === 'Super Admin' && (
              <button className="btn-accent" onClick={() => setShowAdminCreationModal(true)}>
                <Shield size={14} /> Create Admin
              </button>
            )}
            <button className="btn-outline" onClick={() => exportData('all')}>
              <Download size={13} /> Export
            </button>
            <button className="btn-accent" onClick={() => setShowAnnForm(!showAnnForm)}>
              <Bell size={14} /> Post Announcement
            </button>
          </div>
        </div>
        
        {showAnnForm && (
          <div className="card" style={{ marginBottom: '1.5rem', borderColor: 'var(--accent)' }}>
            <div className="card-header">
              <span className="card-title">New Announcement</span>
            </div>
            <div className="card-body">
              <label className="f-label">Title</label>
              <input 
                className="f-input" 
                placeholder="e.g., Monthly Training Session" 
                value={newAnnTitle}
                onChange={e => setNewAnnTitle(e.target.value)}
              />
              <label className="f-label">Content</label>
              <textarea 
                className="f-textarea" 
                placeholder="Write your announcement here..."
                rows="3"
                value={newAnnContent}
                onChange={e => setNewAnnContent(e.target.value)}
              />
              {currentUser.role === 'Management' && (
                <p style={{ fontSize: '0.7rem', color: 'var(--muted)', marginBottom: '1rem' }}>
                  This announcement will be visible to ambassadors at: {currentUser.managedCampuses?.join(', ')}
                </p>
              )}
              <div className="flex-between" style={{ gap: '1rem' }}>
                <button className="btn-outline" onClick={() => setShowAnnForm(false)}>Cancel</button>
                <button className="btn-accent" onClick={handleAddAnnouncement}>Post Announcement</button>
              </div>
            </div>
          </div>
        )}
        
        {/* Stats Overview */}
        <div className="stats-grid stats-grid-4">
          <div className="stat-card stat-card-dark">
            <div className="stat-label">Total Ambassadors</div>
            <div className="stat-value">{activeAmbassadors.length}</div>
            <div style={{ fontSize: '0.75rem', marginTop: '0.25rem', opacity: 0.6 }}>
              +{pendingAmbassadors.length} pending
            </div>
            <Users className="stat-ghost" />
          </div>
          <div className="stat-card stat-card-blue">
            <div className="stat-label">Conversion Rate</div>
            <div className="stat-value">{conversionRate}%</div>
            <div style={{ fontSize: '0.75rem', marginTop: '0.25rem', opacity: 0.6 }}>
              {convertedLeads} of {totalLeads} leads
            </div>
            <TrendingUp className="stat-ghost" />
          </div>
          <div className="stat-card stat-card-accent">
            <div className="stat-label">Total Revenue</div>
            <div className="stat-value" style={{ fontSize: '1.5rem' }}>₦{totalRevenue.toLocaleString()}</div>
            <div style={{ fontSize: '0.75rem', marginTop: '0.25rem', opacity: 0.6 }}>
              Comm: ₦{totalCommission.toLocaleString()}
            </div>
            <DollarSign className="stat-ghost" />
          </div>
          <div className="stat-card stat-card-green">
            <div className="stat-label">Active Now</div>
            <div className="stat-value">{activeAmbassadors.length}</div>
            <div style={{ fontSize: '0.75rem', marginTop: '0.25rem', opacity: 0.6 }}>
              {suspendedAmbassadors.length} suspended
            </div>
            <Activity className="stat-ghost" />
          </div>
        </div>
        
        {/* Tabs */}
        <div className="tabs">
          <button className={`tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>Overview</button>
          <button className={`tab ${activeTab === 'ambassadors' ? 'active' : ''}`} onClick={() => setActiveTab('ambassadors')}>Ambassadors</button>
          {pendingAmbassadors.length > 0 && (
            <button className={`tab ${activeTab === 'pending' ? 'active' : ''}`} onClick={() => setActiveTab('pending')}>
              Pending Approvals ({pendingAmbassadors.length})
            </button>
          )}
          <button className={`tab ${activeTab === 'leads' ? 'active' : ''}`} onClick={() => setActiveTab('leads')}>All Leads</button>
        </div>
        
        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.25rem' }}>
            <div>
              <div className="card">
                <div className="card-header">
                  <span className="card-title">Recent Leads</span>
                  <button className="btn-outline" style={{ padding: '0.4rem 0.75rem', fontSize: '0.68rem' }} onClick={() => setActiveTab('leads')}>
                    View All
                  </button>
                </div>
                {recentLeads.map(l => (
                  <div className="lead-row" key={l.id}>
                    <div>
                      <div className="lead-name">{l.customerName}</div>
                      <div className="lead-service">
                        <User size={10} style={{ display: 'inline', marginRight: 3 }} /> {l.ambassadorName} · {l.service}
                      </div>
                      <div className="lead-date">{l.dateAdded}</div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div className="lead-commission">₦{l.amountPaid?.toLocaleString()}</div>
                      <Badge status={l.status} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="card">
                <div className="card-header">
                  <span className="card-title"><Award size={12} style={{ display: 'inline', marginRight: 6 }} />Top Performers</span>
                </div>
                {topPerformers.map((u, i) => {
                  const rc = i === 0 ? 'rank-gold' : i === 1 ? 'rank-silver' : i === 2 ? 'rank-bronze' : 'rank-default';
                  const userLeads = visibleLeads.filter(l => l.ambassadorId === u.id).length;
                  return (
                    <div className="performer-row" key={u.id}>
                      <div className={`rank-badge ${rc}`}>{i === 0 ? '★' : `#${i + 1}`}</div>
                      <div>
                        <div className="performer-name">{u.name}</div>
                        <div className="performer-meta">{u.campus} · {userLeads} leads</div>
                      </div>
                      <div className="performer-earn">₦{u.earnings.toLocaleString()}</div>
                    </div>
                  );
                })}
              </div>
              
              <div className="card">
                <div className="card-header">
                  <span className="card-title"><Bell size={12} style={{ display: 'inline', marginRight: 6 }} />Recent Announcements</span>
                </div>
                {announcements.slice(0, 3).map(a => (
                  <div className="ann-item" key={a.id}>
                    <div className="ann-title">{a.title}</div>
                    <div className="ann-body">{a.content}</div>
                    <div className="ann-date">{a.date} · by {a.postedBy}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'ambassadors' && (
          <div>
            <div className="filter-bar">
              <input 
                className="filter-search" 
                type="text" 
                placeholder="Search ambassadors by name, email, or campus..." 
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <select className="filter-select" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="suspended">Suspended</option>
                <option value="rejected">Rejected</option>
              </select>
              <button className="btn-outline" onClick={() => exportData('ambassadors')}>
                <Download size={13} /> Export
              </button>
            </div>
            
            <div className="ambassador-grid">
              {visibleAmbassadors
                .filter(u => {
                  if (filterStatus !== 'all' && u.status !== filterStatus) return false;
                  if (searchTerm) {
                    const term = searchTerm.toLowerCase();
                    return u.name.toLowerCase().includes(term) || 
                           u.email.toLowerCase().includes(term) ||
                           u.campus?.toLowerCase().includes(term);
                  }
                  return true;
                })
                .map(u => {
                  const userLeads = leads.filter(l => l.ambassadorId === u.id);
                  const userRevenue = userLeads.reduce((sum, l) => sum + (l.amountPaid || 0), 0);
                  
                  return (
                    <div className="ambassador-card" key={u.id}>
                      <div className="ambassador-header">
                        <div className="ambassador-avatar">
                          <User size={18} color="white" />
                        </div>
                        <div className="ambassador-info">
                          <div className="ambassador-name">{u.name}</div>
                          <div style={{ marginBottom: '0.25rem' }}>
                            <Badge status={u.status} />
                          </div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>{u.campus}</div>
                        </div>
                      </div>
                      <div className="ambassador-body">
                        <div className="ambassador-stat-row">
                          <span className="ambassador-stat-label">Leads</span>
                          <span className="ambassador-stat-value">{userLeads.length}</span>
                        </div>
                        <div className="ambassador-stat-row">
                          <span className="ambassador-stat-label">Earnings</span>
                          <span className="ambassador-stat-value">₦{u.earnings?.toLocaleString()}</span>
                        </div>
                        <div className="ambassador-stat-row">
                          <span className="ambassador-stat-label">Revenue</span>
                          <span className="ambassador-stat-value">₦{userRevenue.toLocaleString()}</span>
                        </div>
                        <div className="ambassador-stat-row">
                          <span className="ambassador-stat-label">Joined</span>
                          <span className="ambassador-stat-value">{u.dateJoined}</span>
                        </div>
                      </div>
                      <div className="ambassador-footer">
                        <button 
                          className="ambassador-action-btn"
                          onClick={() => {
                            setSelectedAmbassador(u);
                            setShowAmbassadorModal(true);
                          }}
                        >
                          <Eye size={12} /> View
                        </button>
                        {u.status === 'active' && (
                          <button 
                            className="ambassador-action-btn"
                            onClick={() => suspendAmbassador(u.id)}
                          >
                            <UserX size={12} /> Suspend
                          </button>
                        )}
                        {u.status === 'suspended' && (
                          <button 
                            className="ambassador-action-btn accent"
                            onClick={() => activateAmbassador(u.id)}
                          >
                            <UserCheck size={12} /> Activate
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
        
        {activeTab === 'pending' && (
          <div className="card">
            <div className="card-header" style={{ borderLeft: '3px solid var(--warning)' }}>
              <span className="card-title"><AlertCircle size={12} style={{ display: 'inline', marginRight: 6, color: 'var(--warning)' }} />Pending Approvals ({pendingAmbassadors.length})</span>
            </div>
            {pendingAmbassadors.length === 0 ? (
              <div className="empty">
                <span className="empty-ico">✅</span>
                <div className="empty-text">No pending approvals</div>
              </div>
            ) : (
              pendingAmbassadors.map(u => (
                <div className="approval-row" key={u.id}>
                  <div>
                    <div className="approval-name">{u.name}</div>
                    <div className="approval-meta">{u.campus} · {u.department}</div>
                    <div className="approval-meta">{u.email} · {u.phone}</div>
                    <div style={{ marginTop: '0.25rem', fontSize: '0.7rem', color: 'var(--muted)' }}>
                      Bank: {u.bankName} · {u.accountNumber}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="approve-btn" onClick={() => approveAmbassador(u.id)}>
                      <CheckCircle size={12} /> Approve
                    </button>
                    <button className="reject-btn" onClick={() => rejectAmbassador(u.id)}>
                      <X size={12} /> Reject
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
        
        {activeTab === 'leads' && (
          <div className="card">
            <div className="card-header">
              <span className="card-title">All Leads</span>
              <button className="btn-outline" style={{ padding: '0.4rem 0.75rem', fontSize: '0.68rem' }} onClick={() => exportData('leads')}>
                <Download size={11} /> Export
              </button>
            </div>
            {visibleLeads.length === 0 ? (
              <div className="empty">
                <span className="empty-ico">📊</span>
                <div className="empty-text">No leads yet</div>
              </div>
            ) : (
              visibleLeads.map(l => (
                <div className="lead-row" key={l.id}>
                  <div>
                    <div className="lead-name">{l.customerName}</div>
                    <div className="lead-service">
                      <User size={10} style={{ display: 'inline', marginRight: 3 }} /> {l.ambassadorName} · {l.service}
                    </div>
                    <div className="lead-metrics">
                      <span className="metric-chip">Paid: ₦{l.amountPaid?.toLocaleString()}</span>
                      <span className="metric-chip">Bal: ₦{l.balance?.toLocaleString()}</span>
                    </div>
                    <div className="lead-date">{l.dateAdded}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div className="lead-commission">₦{l.commission?.toLocaleString()}</div>
                    <Badge status={l.status} />
                    <div style={{ marginTop: '0.5rem' }}>
                      <button 
                        className="lead-action-btn"
                        style={{ padding: '0.2rem 0.5rem' }}
                        onClick={() => {
                          setSelectedLead(l);
                          setPaymentAmount('');
                          setShowPaymentModal(true);
                        }}
                      >
                        <CreditCard size={10} /> Add Payment
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    );
  };

  const ReportsView = () => {
    let filteredLeads = leads;
    
    if (currentUser.role === 'Ambassador') {
      filteredLeads = leads.filter(l => l.ambassadorId === currentUser.id);
    } else if (currentUser.role === 'Management') {
      filteredLeads = leads.filter(l => {
        const ambassador = users.find(u => u.id === l.ambassadorId);
        return currentUser.managedCampuses?.includes(ambassador?.campus);
      });
    }
    
    const monthly = filteredLeads.reduce((acc, l) => {
      const m = new Date(l.dateAdded).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      if (!acc[m]) acc[m] = { leads: 0, revenue: 0, commission: 0 };
      acc[m].leads++; acc[m].revenue += l.amountPaid || 0; acc[m].commission += l.commission || 0;
      return acc;
    }, {});
    
    const total = filteredLeads.length;
    const conv = filteredLeads.filter(l => l.status === 'Converted').length;
    const totalC = filteredLeads.reduce((s, l) => s + (l.commission || 0), 0);
    
    return (
      <div className="fade-up">
        <div className="flex-between mb-md">
          <div><div className="pg-eyebrow">Insights</div><div className="pg-title" style={{ marginBottom: 0 }}>Reports</div></div>
          <button className="btn-outline" onClick={() => exportData('reports')}><Download size={13} /> Export</button>
        </div>
        <div className="stats-grid stats-grid-3" style={{ marginBottom: '1.5rem' }}>
          <div className="stat-card stat-card-dark"><div className="stat-label">Total Leads</div><div className="stat-value">{total}</div></div>
          <div className="stat-card stat-card-blue"><div className="stat-label">Converted</div><div className="stat-value">{conv}</div></div>
          <div className="stat-card stat-card-accent"><div className="stat-label">Commission</div><div className="stat-value" style={{ fontSize: '1.4rem' }}>₦{totalC.toLocaleString()}</div></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          <div className="card">
            <div className="card-header"><span className="card-title">Monthly Performance</span></div>
            {Object.keys(monthly).length === 0 ? <div className="empty"><span className="empty-ico">📈</span><div className="empty-text">No data yet</div></div>
              : Object.entries(monthly).map(([m, data]) => (
                <div className="month-row" key={m}>
                  <div className="month-header"><div className="month-name">{m}</div><div className="month-count">{data.leads} leads</div></div>
                  <div className="month-metrics">
                    <div className="month-metric"><div className="mm-label">Revenue</div><div className="mm-val">₦{data.revenue.toLocaleString()}</div></div>
                    <div className="month-metric"><div className="mm-label">Commission</div><div className="mm-val" style={{ color: 'var(--green)' }}>₦{data.commission.toLocaleString()}</div></div>
                  </div>
                </div>
              ))}
          </div>
          <div className="card">
            <div className="card-header"><span className="card-title">Status Breakdown</span></div>
            {[['New Lead', 'pf-blue'], ['Consultation', 'pf-yellow'], ['Converted', 'pf-green']].map(([status, cls]) => {
              const cnt = filteredLeads.filter(l => l.status === status).length;
              const pct = total > 0 ? (cnt / total * 100) : 0;
              return (
                <div className="prog-row" key={status}>
                  <div className="prog-label">{status}</div>
                  <div className="prog-track"><div className={`prog-fill ${cls}`} style={{ width: `${pct}%` }}></div></div>
                  <div className="prog-count">{cnt} ({pct.toFixed(0)}%)</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // ---- NAVIGATION CONFIG ----
  const isManagement = currentUser?.role === 'Management' || currentUser?.role === 'Super Admin';
  const navItems = isManagement
    ? [
        { id: 'dashboard', icon: Settings, label: 'Dashboard' }, 
        { id: 'leads', icon: Users, label: 'All Leads' }, 
        { id: 'reports', icon: BarChart3, label: 'Reports' }, 
        { id: 'profile', icon: User, label: 'Profile' }
      ]
    : [
        { id: 'dashboard', icon: Home, label: 'Dashboard' }, 
        { id: 'leads', icon: Users, label: 'My Leads' }, 
        { id: 'reports', icon: BarChart3, label: 'Reports' }, 
        { id: 'referral', icon: Share2, label: 'Referral' }, 
        { id: 'profile', icon: User, label: 'Profile' }
      ];

  const viewTitles = { 
    dashboard: isManagement ? 'Management' : 'Dashboard', 
    leads: 'Leads', 
    reports: 'Reports', 
    referral: 'Referral', 
    profile: 'Profile', 
    addLead: 'Add Lead' 
  };
  
  const viewEyebrows = { 
    dashboard: isManagement ? 'Control Center' : 'Overview', 
    leads: 'Pipeline', 
    reports: 'Insights', 
    referral: 'Growth', 
    profile: 'Account', 
    addLead: 'New Entry' 
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard': return isManagement ? <ManagementDashboard /> : <Dashboard />;
      case 'addLead': return <AddLeadForm />;
      case 'leads': return <LeadsView />;
      case 'referral': return <ReferralView />;
      case 'profile': return <ProfileView />;
      case 'reports': return <ReportsView />;
      default: return isManagement ? <ManagementDashboard /> : <Dashboard />;
    }
  };

  if (!currentUser) {
    return (
      <div className="cap">
        <style>{STYLES}</style>
        {currentView === 'login' ? <LoginScreen /> : <RegisterScreen />}
      </div>
    );
  }

  const activeNav = navItems.find(n => n.id === currentView) ? currentView : 'dashboard';

  return (
    <div className="cap">
      <style>{STYLES}</style>
      <div className="app-shell">

        {/* SIDEBAR */}
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-logo">
            <div className="brand">Campus<span>.</span></div>
            <div className="brand-sub">Ambassador Platform</div>
          </div>
          <div className="sidebar-user">
            <div className="sidebar-avatar">
              {currentUser.role === 'Super Admin' ? <Shield size={18} color="white" /> : <User size={18} color="white" />}
            </div>
            <div>
              <div className="sidebar-name">{currentUser.name.split(' ')[0]}</div>
              <div className="sidebar-role">
                {currentUser.role === 'Super Admin' ? 'Super Admin' : currentUser.role}
              </div>
              {currentUser.role === 'Management' && currentUser.managedCampuses && (
                <div className="sidebar-campus">
                  <Building size={10} /> {currentUser.managedCampuses.length} campus(es)
                </div>
              )}
              {!isManagement && <div className="ref-pill">{currentUser.referralCode}</div>}
            </div>
          </div>
          <nav className="sidebar-nav">
            {navItems.map(({ id, icon: Icon, label }) => (
              <button key={id} className={`nav-item ${activeNav === id ? 'active' : ''}`} onClick={() => { setCurrentView(id); setSidebarOpen(false); }}>
                <Icon size={16} />
                {label}
                <span className="nav-dot"></span>
              </button>
            ))}
          </nav>
          <div className="sidebar-footer">
            <button className="logout-btn" onClick={() => { setCurrentUser(null); setCurrentView('login'); setSidebarOpen(false); }}>
              <LogOut size={13} /> Sign Out
            </button>
          </div>
        </div>

        {/* SIDEBAR OVERLAY (mobile) */}
        <div className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`} onClick={() => setSidebarOpen(false)} />

        {/* MAIN AREA */}
        <div className="main-area">
          {/* Desktop Topbar */}
          <div className="topbar">
            <div>
              <div className="topbar-eyebrow">{viewEyebrows[currentView] || 'Overview'}</div>
              <div className="topbar-title">{viewTitles[currentView] || 'Dashboard'}</div>
            </div>
            <div className="topbar-actions">
              {currentUser.role === 'Ambassador' && currentView !== 'addLead' && currentView !== 'profile' && (
                <button className="btn-accent" onClick={() => setCurrentView('addLead')}><Plus size={14} /> Add Lead</button>
              )}
            </div>
          </div>

          {/* Desktop content */}
          <div className="page-content">
            {renderView()}
          </div>

          {/* Mobile header */}
          <div className="mobile-header">
            <div className="mobile-brand">Campus<span>.</span></div>
            <button className="mobile-menu-btn" onClick={() => setSidebarOpen(true)}><Menu size={20} /></button>
          </div>

          {/* Mobile content */}
          <div className="mobile-content">
            {renderView()}
          </div>

          {/* Mobile bottom nav */}
          <div className="mobile-bottom-nav">
            {navItems.map(({ id, icon: Icon, label }) => (
              <button key={id} className={`mobile-nav-btn ${activeNav === id ? 'active' : ''}`} onClick={() => setCurrentView(id)}>
                <Icon size={19} />
                <span className="mobile-nav-label">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CAP;