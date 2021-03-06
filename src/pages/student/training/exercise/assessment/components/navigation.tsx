import * as React from 'react';
import { Link } from 'react-router';
import { Breadcrumb, BreadcrumbItem } from '../../../../../../common/components';
import { studentRouteEnums } from '../../../../../../common/routeEnums/student';
const teachingImg: any = require('../../../../../../content/image/teaching.svg');
const styles: any = require('../../../../../../content/sass/components/navigation.scss');

export const NavigationBar: React.StatelessComponent<{}> = () => (
  <div>
    <Breadcrumb>
      <BreadcrumbItem wrapOnly={true}>
        <img className={styles.navigationImg} src={teachingImg} alt="teaching logo" />
        <Link to={studentRouteEnums.default}>Lemoncode</Link>
      </BreadcrumbItem>
      <BreadcrumbItem href={studentRouteEnums.training.list}>My Trainings</BreadcrumbItem>
      <BreadcrumbItem href={`${studentRouteEnums.training.base}/34/`}>Full Stack Online Máster</BreadcrumbItem>
      <BreadcrumbItem href={`${studentRouteEnums.training.base}/34/`}>Exercise 1</BreadcrumbItem>
      <BreadcrumbItem active={true}>Assessment</BreadcrumbItem>
    </Breadcrumb>
  </div>
);

NavigationBar.displayName = 'NavigationBar';
