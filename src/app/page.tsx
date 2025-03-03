import GymFlowBanner from '@/components/Home/GymFlowBanner/GymFlowBanner';
import WhyChooseUs from '@/components/Home/WhyChooseUs/WhyChooseUs';
import SelectYourActivitie from '@/components/Home/SelectYourActivity/SelectYourActivity';

export default function Home() {
  return (
    <div className="bg-primary">
      <GymFlowBanner />
      <WhyChooseUs />
      <SelectYourActivitie />
    </div>
  );
}
