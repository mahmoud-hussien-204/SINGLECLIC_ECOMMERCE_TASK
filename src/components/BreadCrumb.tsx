import Link from "next/link";

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({items}) => {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.href ? <Link href={item.href}>{item.label}</Link> : item.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
