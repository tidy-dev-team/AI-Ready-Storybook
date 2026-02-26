import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { BadgeNum }              from './components/BadgeNum/BadgeNum.tsx';
import { TrendBadge }            from './components/TrendBadge/TrendBadge.tsx';
import { CategoryIcon }          from './components/CategoryIcon/CategoryIcon.tsx';
import { BadgeAvatar }           from './components/BadgeAvatar/BadgeAvatar.tsx';
import { Divider }               from './components/Divider/Divider.tsx';
import { Tag }                   from './components/Tag/Tag.tsx';
import { Button }                from './components/Button/Button.tsx';
import { ButtonIcon }            from './components/ButtonIcon/ButtonIcon.tsx';
import { TextButton }            from './components/TextButton/TextButton.tsx';
import { AvatarMember }          from './components/AvatarMember/AvatarMember.tsx';
import { AvatarUser }            from './components/AvatarUser/AvatarUser.tsx';
import { ListItem }              from './components/ListItem/ListItem.tsx';
import { SearchBar }             from './components/SearchBar/SearchBar.tsx';
import { InsightBanner }         from './components/InsightBanner/InsightBanner.tsx';
import { CardKpi }               from './components/CardKpi/CardKpi.tsx';
import { InsuranceCard }         from './components/InsuranceCard/InsuranceCard.tsx';
import { CardInsuranceCoverage } from './components/CardInsuranceCoverage/CardInsuranceCoverage.tsx';
import { SideBanner }            from './components/SideBanner/SideBanner.tsx';
import { NavigationPanel }       from './components/NavigationPanel/NavigationPanel.tsx';
import { SummaryItem }           from './components/SummaryItem/SummaryItem.tsx';
import {
  HomeIcon, WalletIcon, ShieldIcon, SavingsIcon, MailIcon, HeadsetIcon,
} from './components/icons/index.tsx';

const meta = {
  title: 'Showcase',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const COVERAGE_ITEMS = [
  { id: '1', title: 'Life Insurance',   icon: 'shield'  as const, provider: 'AXA Group', coverage: '$500,000', monthlyPremium: '$120' },
  { id: '2', title: 'Home Insurance',   icon: 'home'    as const, provider: 'Zurich',    coverage: '$250,000', monthlyPremium: '$85'  },
  { id: '3', title: 'Health Insurance', icon: 'headset' as const, provider: 'Allianz',   coverage: '$100,000', monthlyPremium: '$135' },
];

/* ── inline chart & image for card slots ─────────────────────────────────── */

const AreaChart = () => {
  const points = [
    { x: 0,   y: 220 }, { x: 37,  y: 190 }, { x: 74,  y: 210 },
    { x: 111, y: 160 }, { x: 148, y: 175 }, { x: 185, y: 120 },
    { x: 222, y: 90  }, { x: 259, y: 100 }, { x: 296, y: 55  }, { x: 333, y: 30  },
  ];
  const lineD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
  const areaD = `${lineD} L333,290 L0,290 Z`;
  return (
    <svg viewBox="0 0 333 290" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#007a55" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#007a55" stopOpacity="0"    />
        </linearGradient>
      </defs>
      {[60, 110, 160, 210, 260].map((y) => (
        <line key={y} x1="0" y1={y} x2="333" y2={y} stroke="#F0F0EC" strokeWidth="1" />
      ))}
      <path d={areaD} fill="url(#areaGrad)" />
      <path d={lineD} stroke="#007a55" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="333" cy="30" r="4"  fill="#007a55" />
      <circle cx="333" cy="30" r="7"  fill="#007a55" fillOpacity="0.15" />
    </svg>
  );
};

const CardPhoto = () => (
  <svg viewBox="0 0 333 290" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ width: '100%', height: '100%', display: 'block', borderRadius: 8 }}>
    {/* sky */}
    <rect width="333" height="290" fill="#EAF4F0" rx="8" />
    {/* sun */}
    <circle cx="275" cy="58" r="30" fill="#FFF9C4" />
    <circle cx="275" cy="58" r="22" fill="#FFF176" />
    {/* clouds */}
    <ellipse cx="80"  cy="52" rx="36" ry="18" fill="white" fillOpacity="0.85" />
    <ellipse cx="108" cy="42" rx="28" ry="16" fill="white" fillOpacity="0.85" />
    <ellipse cx="58"  cy="48" rx="22" ry="14" fill="white" fillOpacity="0.85" />
    <ellipse cx="185" cy="38" rx="28" ry="14" fill="white" fillOpacity="0.65" />
    <ellipse cx="207" cy="30" rx="20" ry="12" fill="white" fillOpacity="0.65" />
    {/* back mountains */}
    <path d="M0 185 L55 105 L115 165 L175 82 L235 135 L333 95 L333 290 L0 290 Z" fill="#A8D5BE" />
    {/* front mountains */}
    <path d="M0 225 L75 145 L135 195 L195 132 L258 185 L333 155 L333 290 L0 290 Z" fill="#7EC8A0" />
    {/* ground */}
    <path d="M0 255 Q83 238 166 258 Q249 278 333 252 L333 290 L0 290 Z" fill="#5BA37D" />
    {/* house body */}
    <rect x="132" y="202" width="62" height="46" fill="#4A8B6A" />
    {/* roof */}
    <polygon points="128,202 163,173 198,202" fill="#3D7A5A" />
    {/* door */}
    <rect x="149" y="222" width="16" height="26" fill="#2E6B4A" />
    {/* windows */}
    <rect x="136" y="208" width="13" height="11" rx="2" fill="white" fillOpacity="0.55" />
    <rect x="169" y="208" width="13" height="11" rx="2" fill="white" fillOpacity="0.55" />
    {/* left tree */}
    <rect x="61"  y="218" width="8" height="32" fill="#3D7A5A" />
    <ellipse cx="65"  cy="212" rx="19" ry="21" fill="#5BA37D" />
    {/* right tree */}
    <rect x="258" y="213" width="8" height="36" fill="#3D7A5A" />
    <ellipse cx="262" cy="207" rx="17" ry="19" fill="#5BA37D" />
  </svg>
);

/* ── helpers ─────────────────────────────────────────────────────────────── */

function Surface({ children, p = 16, gap = 0 }: {
  children: React.ReactNode; p?: number; gap?: number;
}) {
  return (
    <div style={{
      background: '#fff', borderRadius: 16, padding: p,
      border: '1px solid #f0f0ec',
      display: 'flex', flexDirection: 'column',
      ...(gap ? { gap } : {}),
    }}>
      {children}
    </div>
  );
}

function Row({ children, gap = 8 }: { children: React.ReactNode; gap?: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap, flexWrap: 'wrap' }}>
      {children}
    </div>
  );
}

function Sep() {
  return <div style={{ height: 1, background: '#f0f0ec', margin: '8px 0' }} />;
}

/** A single masonry tile — never breaks across columns */
function Tile({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ breakInside: 'avoid', marginBottom: 16 }}>
      {children}
    </div>
  );
}

/* ── story ───────────────────────────────────────────────────────────────── */

export const Dashboard: Story = {
  name: 'All Components',
  render: () => (
    <div style={{
      background: '#ffffff',
      minHeight: '100vh',
      padding: 32,
      boxSizing: 'border-box',
      fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      {/*
        CSS multi-column masonry:
        3 balanced columns, each ~401px wide.
        Tiles flow top-to-bottom and the browser packs them
        to equalise column heights automatically.
      */}
      <div style={{ columns: 3, columnGap: 16 }}>

        {/* ── KPI Card with chart ── tall anchor for col 1 */}
        <Tile>
          <CardKpi
            title="Pension Portfolio"
            icon="wallet"
            kpiValue="$847,320"
            kpiLabel="Total Balance"
            trend="12.4%"
            trendDirection="positive"
            ctaLabel="View Full Portfolio"
          >
            <AreaChart />
          </CardKpi>
        </Tile>

        {/* ── KPI Card with image ── tall anchor for col 2 */}
        <Tile>
          <CardKpi
            title="Savings Account"
            icon="savings"
            kpiValue="$32,500"
            kpiLabel="Total Savings"
            trend="5.8%"
            trendDirection="positive"
            ctaLabel="View Account"
          >
            <CardPhoto />
          </CardKpi>
        </Tile>

        {/* ── Navigation ── tall anchor for col 2 */}
        <Tile>
          <div style={{
            background: '#fff', borderRadius: 16,
            border: '1px solid #f0f0ec', overflow: 'hidden',
          }}>
            <NavigationPanel
              defaultActiveId="pension"
              userName="David"
              userPlan="Premium Plan"
            />
          </div>
        </Tile>

        {/* ── Side Banner ── medium-tall anchor for col 3 */}
        <Tile>
          <SideBanner
            tag="2025 Wrapped"
            label="Total Contributions"
            kpi="$56,200"
            badge="🏆 Top Achiever"
            description="Maximum pension contributions reached"
          />
        </Tile>

        {/* ── Insurance Cards ── stacked pair */}
        <Tile>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <InsuranceCard title="Life Insurance" icon="shield"  provider="AXA Group" coverage="$500,000" monthlyPremium="$120" />
            <InsuranceCard title="Home Insurance" icon="home"    provider="Zurich"    coverage="$250,000" monthlyPremium="$85"  />
          </div>
        </Tile>

        {/* ── Badges ── */}
        <Tile>
          <Surface p={14} gap={10}>
            <Row gap={6}>
              <BadgeNum count={1} />
              <BadgeNum count={3} />
              <BadgeNum count={9} />
              <BadgeNum count={24} />
            </Row>
            <Sep />
            <Row gap={8}>
              <TrendBadge value="+12.4%" direction="positive" />
              <TrendBadge value="−3.2%"  direction="negative" />
            </Row>
          </Surface>
        </Tile>

        {/* ── Category Icons ── */}
        <Tile>
          <Surface p={14}>
            <Row gap={10}>
              <CategoryIcon icon="wallet"    />
              <CategoryIcon icon="shield"    />
              <CategoryIcon icon="savings"   />
              <CategoryIcon icon="home"      />
              <CategoryIcon icon="mail"      />
              <CategoryIcon icon="headset"   />
              <CategoryIcon icon="file-text" />
            </Row>
          </Surface>
        </Tile>

        {/* ── Tags ── */}
        <Tile>
          <Surface p={14} gap={8}>
            <Tag label="All categories" showChevron />
            <Tag label="Pension"   icon={<WalletIcon  size={16} color="#171717" />} showChevron />
            <Tag label="Insurance" icon={<ShieldIcon  size={16} color="#171717" />} showChevron />
            <Tag label="Savings"   icon={<SavingsIcon size={16} color="#171717" />} />
            <Tag label="Documents" icon={<HomeIcon    size={16} color="#171717" />} />
          </Surface>
        </Tile>

        {/* ── Badge Avatars ── */}
        <Tile>
          <Surface p={14} gap={10}>
            <Row gap={8}>
              <BadgeAvatar icon="wallet"  fill="yes" />
              <BadgeAvatar icon="shield"  fill="yes" />
              <BadgeAvatar icon="savings" fill="yes" />
              <BadgeAvatar icon="home"    fill="yes" />
            </Row>
            <Row gap={8}>
              <BadgeAvatar icon="wallet"  fill="no" />
              <BadgeAvatar icon="shield"  fill="no" />
              <BadgeAvatar icon="mail"    fill="no" dot />
              <BadgeAvatar icon="headset" fill="no" />
            </Row>
          </Surface>
        </Tile>

        {/* ── Avatars ── */}
        <Tile>
          <Surface p={14} gap={10}>
            <Row gap={8}>
              <AvatarMember member="1" />
              <AvatarMember member="2" />
              <AvatarMember member="3" />
              <AvatarMember member="4" />
            </Row>
            <Sep />
            <AvatarUser name="David" member="1" active />
            <AvatarUser name="Aisha" member="2" active />
            <AvatarUser name="Sam"   member="3" active={false} />
          </Surface>
        </Tile>

        {/* ── List Items ── */}
        <Tile>
          <Surface p={8} gap={2}>
            <ListItem text="Pension Portfolio" icon="wallet"    state="selected" showChevron badgeCount={3} />
            <ListItem text="Insurance"         icon="shield"    state="idle"     showChevron />
            <ListItem text="Savings"           icon="savings"   state="hover"    showChevron />
            <ListItem text="Documents"         icon="file-text" state="idle"     showChevron />
            <Divider />
            <ListItem text="Support"           icon="headset"   state="idle" />
          </Surface>
        </Tile>

        {/* ── Search ── */}
        <Tile>
          <SearchBar placeholder="Ask me anything…" />
        </Tile>

        {/* ── Insight Banner ── */}
        <Tile>
          <InsightBanner
            text="Your pension contributions are on track. You're in the top 15% of savers your age."
            actionLabel="Learn more"
          />
        </Tile>

        {/* ── Summary Items ── */}
        <Tile>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ background: '#fff', borderRadius: 14, padding: '14px 16px', border: '1px solid #f0f0ec' }}>
              <SummaryItem title="Monthly premium" kpi="$340"     description="4 policies"  showDescription />
            </div>
            <div style={{ background: '#fff', borderRadius: 14, padding: '14px 16px', border: '1px solid #f0f0ec' }}>
              <SummaryItem title="Total coverage"  kpi="$1.2M"    description="Life & Home" showDescription />
            </div>
            <div style={{ background: '#fff', borderRadius: 14, padding: '14px 16px', border: '1px solid #f0f0ec' }}>
              <SummaryItem title="Next renewal"    kpi="Mar 2025" showDescription={false} />
            </div>
          </div>
        </Tile>

        {/* ── Coverage Card ── */}
        <Tile>
          <CardInsuranceCoverage title="My Coverage" items={COVERAGE_ITEMS} />
        </Tile>

        {/* ── Buttons & Actions ── */}
        <Tile>
          <Surface p={14} gap={12}>
            <Row gap={8}>
              <Button label="Get started" state="idle"     />
              <Button label="Hover"       state="hover"    />
              <Button label="Pressed"     state="pressed"  />
              <Button label="Disabled"    state="disabled" />
            </Row>
            <Sep />
            <Row gap={8}>
              <TextButton label="View details" showChevron />
              <TextButton label="See all" />
              <TextButton label="Disabled" state="disabled" />
            </Row>
            <Sep />
            <Row gap={8}>
              <ButtonIcon icon={<HomeIcon    size={18} color="#171717" />} aria-label="Home"    />
              <ButtonIcon icon={<WalletIcon  size={18} color="#171717" />} aria-label="Wallet"  />
              <ButtonIcon icon={<MailIcon    size={18} color="#171717" />} aria-label="Mail"    state="hover"   />
              <ButtonIcon icon={<HeadsetIcon size={18} color="#171717" />} aria-label="Support" state="pressed" />
              <ButtonIcon icon={<ShieldIcon  size={18} color="#b0b0b0" />} aria-label="Shield"  state="disabled" />
              <ButtonIcon icon={<SavingsIcon size={18} color="#171717" />} aria-label="Savings" />
            </Row>
          </Surface>
        </Tile>

      </div>
    </div>
  ),
};
