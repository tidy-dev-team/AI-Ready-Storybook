import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { BadgeNum }              from './components/BadgeNum/BadgeNum.tsx';
import { TrendBadge }            from './components/TrendBadge/TrendBadge.tsx';
import { CategoryIcon }          from './components/CategoryIcon/CategoryIcon.tsx';
import { BadgeAvatar }           from './components/BadgeAvatar/BadgeAvatar.tsx';
import { Tag }                   from './components/Tag/Tag.tsx';
import { Button }                from './components/Button/Button.tsx';
import { ButtonIcon }            from './components/ButtonIcon/ButtonIcon.tsx';
import { TextButton }            from './components/TextButton/TextButton.tsx';
import { AvatarMember }          from './components/AvatarMember/AvatarMember.tsx';
import { AvatarUser }            from './components/AvatarUser/AvatarUser.tsx';
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

/* ── helpers ────────────────────────────────────────────────────────────── */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontSize: 10, fontWeight: 700, letterSpacing: 1.5,
      textTransform: 'uppercase', color: '#b0b0b0', marginBottom: 8,
    }}>
      {children}
    </div>
  );
}

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
  return <div style={{ height: 1, background: '#f0f0ec', margin: '12px 0' }} />;
}

/* ── story ──────────────────────────────────────────────────────────────── */

export const Dashboard: Story = {
  name: 'All Components',
  render: () => (
    <div style={{
      background: '#f8f7f4',
      minHeight: '100vh',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      fontFamily: 'Arial, sans-serif',
      boxSizing: 'border-box',
    }}>

      {/* ── Four columns ─────────────────────────────────────────────── */}
      <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>

        {/* Col A — atoms ─────────────────────────────────────────────── */}
        <div style={{ width: 196, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>

          <div>
            <Label>Badges</Label>
            <Surface p={14} gap={10}>
              <Row>
                <BadgeNum count={1} />
                <BadgeNum count={3} />
                <BadgeNum count={9} />
                <BadgeNum count={24} />
              </Row>
              <Sep />
              <TrendBadge value="+12.4%" direction="positive" />
              <TrendBadge value="-3.2%"  direction="negative" />
            </Surface>
          </div>

          <div>
            <Label>Tags</Label>
            <Surface p={14} gap={8}>
              <Tag label="All categories"  showChevron />
              <Tag label="Pension"   icon={<WalletIcon  size={16} color="#171717" />} showChevron />
              <Tag label="Insurance" icon={<ShieldIcon  size={16} color="#171717" />} showChevron />
              <Tag label="Savings"   icon={<SavingsIcon size={16} color="#171717" />} showChevron />
              <Tag label="Documents" icon={<HomeIcon    size={16} color="#171717" />} />
            </Surface>
          </div>

          <div>
            <Label>Category Icons</Label>
            <Surface p={14}>
              <Row gap={10}>
                <CategoryIcon icon="wallet" />
                <CategoryIcon icon="shield" />
                <CategoryIcon icon="savings" />
                <CategoryIcon icon="home" />
                <CategoryIcon icon="mail" />
                <CategoryIcon icon="headset" />
                <CategoryIcon icon="file-text" />
              </Row>
            </Surface>
          </div>

          <div>
            <Label>Badge Avatar</Label>
            <Surface p={14} gap={10}>
              <Row gap={8}>
                <BadgeAvatar icon="home"      fill="yes" />
                <BadgeAvatar icon="wallet"    fill="yes" />
                <BadgeAvatar icon="shield"    fill="yes" />
                <BadgeAvatar icon="savings"   fill="yes" />
              </Row>
              <Row gap={8}>
                <BadgeAvatar icon="home"      fill="no" />
                <BadgeAvatar icon="wallet"    fill="no" />
                <BadgeAvatar icon="shield"    fill="no" />
                <BadgeAvatar icon="savings"   fill="no" dot />
              </Row>
              <Row gap={8}>
                <BadgeAvatar icon="mail"      fill="no" />
                <BadgeAvatar icon="headset"   fill="no" />
                <BadgeAvatar icon="file-text" fill="no" />
                <BadgeAvatar icon="mail"      fill="no" dot />
              </Row>
            </Surface>
          </div>

          <div>
            <Label>Avatars</Label>
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
              <AvatarUser name="Maya"  member="4" active={false} />
            </Surface>
          </div>

        </div>

        {/* Col B — nav + search ─────────────────────────────────────── */}
        <div style={{ width: 280, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>

          <div>
            <Label>Navigation</Label>
            <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #f0f0ec', overflow: 'hidden' }}>
              <NavigationPanel
                defaultActiveId="insurance"
                userName="David"
                userPlan="Premium Plan"
              />
            </div>
          </div>

          <div>
            <Label>Search</Label>
            <SearchBar placeholder="Ask me anything..." />
          </div>

          <div>
            <Label>More Tags</Label>
            <Surface p={14} gap={8}>
              <Row gap={8}>
                <Tag label="Active"   />
                <Tag label="Pending"  />
              </Row>
              <Row gap={8}>
                <Tag label="2025"     showChevron />
                <Tag label="Q4"       showChevron />
              </Row>
            </Surface>
          </div>

        </div>

        {/* Col C — main content ─────────────────────────────────────── */}
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>

          <div>
            <Label>Insurance Cards</Label>
            <div style={{ display: 'flex', gap: 12 }}>
              <InsuranceCard title="Life Insurance"   icon="shield"  provider="AXA Group" coverage="$500,000" monthlyPremium="$120" />
              <InsuranceCard title="Home Insurance"   icon="home"    provider="Zurich"    coverage="$250,000" monthlyPremium="$85"  />
              <InsuranceCard title="Health Insurance" icon="headset" provider="Allianz"   coverage="$100,000" monthlyPremium="$135" />
            </div>
          </div>

          <div>
            <Label>Coverage</Label>
            <CardInsuranceCoverage title="My Coverage" items={COVERAGE_ITEMS} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 12 }}>
            <div>
              <Label>Side Banner</Label>
              <SideBanner
                tag="2025 Wrapped"
                label="Total Contributions"
                kpi="$56,200"
                badge="🏆 Top Achiever"
                description="Maximum pension contributions reached"
              />
            </div>
            <div>
              <Label>Insight Banner</Label>
              <InsightBanner
                text="Your pension contributions are on track. You're in the top 15% of savers your age."
                actionLabel="Learn more"
              />
            </div>
          </div>

        </div>

        {/* Col D — KPI + data ───────────────────────────────────────── */}
        <div style={{ width: 290, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>

          <div>
            <Label>KPI Cards</Label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <CardKpi
                title="Total Pension"  icon="wallet"
                kpiValue="$84,200"    kpiLabel="Total balance"
                trend="+12.4%"        trendDirection="positive"
                ctaLabel="View Portfolio"
              />
              <CardKpi
                title="Insurance"     icon="shield"
                kpiValue="$1,200"     kpiLabel="Annual premium"
                trend="-2.1%"         trendDirection="negative"
                ctaLabel="Manage policies"
              />
              <CardKpi
                title="Savings Goal"  icon="savings"
                kpiValue="$22,500"    kpiLabel="Current balance"
                trend="+5.8%"         trendDirection="positive"
                ctaLabel="View savings"
              />
            </div>
          </div>

          <div>
            <Label>Summary</Label>
            <div style={{ display: 'flex', gap: 10 }}>
              <div style={{ flex: 1, background: '#fff', borderRadius: 14, padding: '16px 14px', border: '1px solid #f0f0ec' }}>
                <SummaryItem title="Monthly" kpi="$340" description="4 policies" showDescription />
              </div>
              <div style={{ flex: 1, background: '#fff', borderRadius: 14, padding: '16px 14px', border: '1px solid #f0f0ec' }}>
                <SummaryItem title="Coverage" kpi="$1.2M" description="Life & Home" showDescription />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom strip — all button variants ───────────────────────── */}
      <div>
        <Label>Buttons &amp; Actions</Label>
        <Surface p={16}>
          <Row gap={10}>
            <Button label="Get started"    state="idle"     />
            <Button label="Hover"          state="hover"    />
            <Button label="Pressed"        state="pressed"  />
            <Button label="Disabled"       state="disabled" />
            <div style={{ width: 1, height: 32, background: '#f0f0ec' }} />
            <TextButton label="View details" showChevron />
            <TextButton label="See all" />
            <TextButton label="Disabled" state="disabled" />
            <div style={{ width: 1, height: 32, background: '#f0f0ec' }} />
            <ButtonIcon icon={<HomeIcon    size={18} color="#171717" />} aria-label="Home"    />
            <ButtonIcon icon={<WalletIcon  size={18} color="#171717" />} aria-label="Wallet"  state="idle"     />
            <ButtonIcon icon={<MailIcon    size={18} color="#171717" />} aria-label="Mail"    state="hover"    />
            <ButtonIcon icon={<HeadsetIcon size={18} color="#171717" />} aria-label="Support" state="pressed"  />
            <ButtonIcon icon={<ShieldIcon  size={18} color="#b0b0b0" />} aria-label="Shield"  state="disabled" />
            <ButtonIcon icon={<SavingsIcon size={18} color="#171717" />} aria-label="Savings" />
          </Row>
        </Surface>
      </div>

    </div>
  ),
};
