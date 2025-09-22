import { Menubar } from 'primereact/menubar';

const Navigation = () => {

  const navlist = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => {
        window.location.href = '/';
      },
    },
    {
      label: 'Customer',
      icon: 'pi pi-fw pi-user',
      items: [
        {
          label: 'All Customers',
          icon: 'pi pi-fw pi-user',
          command: () => { window.location.href = './allcustomers' },
        },
        {
          label: 'Save Customers',
          icon: 'pi pi-fw pi-user',
          command: () => { window.location.href = './savecustomer' },
        }
      ]
    }
  ];

  return (
    <div>
      <header>
        <nav>
          <ul>
            <Menubar model={navlist} />
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
