
const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <Section title="Section 1" bgColor="bg-blue-200">
          <p>This is the first section of the homepage.</p>
          <p>You can add more text and elements here.</p>
        </Section>

        <Section title="Section 2" bgColor="bg-green-200">
          <p>This is the second section of the homepage.</p>
          <p>You can customize the content as needed.</p>
        </Section>

        <Section title="Section 3" bgColor="bg-yellow-200">
          <p>This is the third section of the homepage.</p>
          <p>Feel free to add more sections if necessary.</p>
        </Section>
      </div>
    </div>
  );
};

interface SectionProps {
  title: string;
  bgColor: string;
}

const Section: React.FC<SectionProps> = ({ title, bgColor, children }) => {
  return (
    <div className={`${bgColor} p-4 mb-4 rounded`}>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
};

export default HomePage;

