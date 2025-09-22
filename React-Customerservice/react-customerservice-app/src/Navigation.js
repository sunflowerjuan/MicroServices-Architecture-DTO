import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  const navlist = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => navigate('/'),
    },
    {
      label: 'Customer',
      icon: 'pi pi-fw pi-user',
      items: [
        {
          label: 'All Customers',
          icon: 'pi pi-fw pi-list',
          command: () => navigate('/allcustomers'),
        },
        {
          label: 'Save Customers',
          icon: 'pi pi-fw pi-plus',
          command: () => navigate('/savecustomer'),
        },
        {
          label: 'Delete Customer',
          icon: 'pi pi-fw pi-trash',
          command: () => navigate('/deletecustomer'),
        },
        {
          label: 'Find by ID',
          icon: 'pi pi-fw pi-search',
          command: () => navigate('/findcustomer'),
        }
      ],
    },
  ];

  return (
    <div>
      <header>
        <nav>
          <Menubar model={navlist} />
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
