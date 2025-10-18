import React from 'react'
import Header from '../Header/Header'
import { useTranslation } from 'react-i18next';
import SoftwareDevelopment from './Softwaredevelopment/SoftwareDevelopment';

export default function Softwaredevelopment() {
      const { t, i18n } = useTranslation();
  return <>
  <Header title={t('SoftwareDevelopmentService')} role={t('service')} description={t('SoftwareDevelopmentService')}></Header>
  <SoftwareDevelopment></SoftwareDevelopment>
  </>
  
}
