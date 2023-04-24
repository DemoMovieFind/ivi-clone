import { useIntl } from 'react-intl';
import NavList from '../navList/NavList';
import styles from './Footer.module.css';
import { ConnectButton } from '../buttons/ConnectButton/ConnectButton';
import { DeviceButton } from '../buttons/DeviceButton/DeviceButton';
import { IconButton } from '../buttons/IconButton/IconButton';

const Footer = () => {
  const intl = useIntl();
  return <footer className={styles.footer}>
    <div className={styles.top}>
      <div className={styles.navWrapper}>
        <NavList 
          links={[
            {
              href:'/',
              translationId:'nav_list_vacancies',
            },
            {
              href:'/',
              translationId:'nav_list_advertisement',
            },
            {
              href:'/',
              translationId:'nav_list_privacy_policy',
            }
          ]} 
          vertical={true}
          headerTranslationId='nav_list_about_us'
        />
        <NavList 
          links={[
            {
              href:'/',
              translationId:'nav_list_myIvi',
            },
            {
              href:'/',
              translationId:'nav_list_new',
            },
            {
              href:'/',
              translationId:'nav_list_films',
            },
            {
              href:'/',
              translationId:'nav_list_series',
            },
            {
              href:'/',
              translationId:'nav_list_cartoons',
            },
            {
              href:'/',
              translationId:'nav_list_certificate_activation',
              marked:true,
            }
          ]} 
          vertical={true}
          headerTranslationId='nav_list_sections'
        />
      </div>
      <div className={styles.support}>
        <h5 className={styles.title}>{intl.formatMessage({id:'footer_support'})}</h5>
        <p className={styles.description}>{intl.formatMessage({id:'footer_support_description'})}</p>
        <div className={styles.buttonTopWrapper}>
          <ConnectButton name='mail'/>
          <ConnectButton name='tel'/>
        </div>
      </div>
    </div>
    <div className={styles.bottom}>
      <div className={styles.buttonsBottomWrapper}>
        <div className={styles.buttonDownloadWrapper}>
          <DeviceButton name='google-play'/>
          <DeviceButton name='app-store'/>
          <DeviceButton name='smart-tv'/>
          <DeviceButton name='all-devices'/>
        </div>
        <div className={styles.buttonIconsWrapper}>
          <IconButton name='vk'/>
          <IconButton name='ok'/>
          <IconButton name='tw'/>
          <IconButton name='vb'/>
          <IconButton name='in'/>
          <IconButton name='tl'/>
        </div>
      </div>
      <p className={styles.descriptionBottom}>&#169; {intl.formatMessage({id:'footer_mega_command'})}</p>
    </div>
  </footer>
};

export default Footer;