import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Que se resuelve?',
    paragraph: 'La información referente al plan de estudios (malla curricular) no se encuentra integrada en el mismo lugar en que los estudiantes encuentran la información sobre su respectiva historia académica. Debido a esto, los estudiantes solo tienen la oportunidad de conocer las materias que pueden cursar durante la inscripción de materias y no en otros momentos. La universidad nacional de Colombia maneja el avance del plan de estudios por créditos aprobados en grupos determinados o categorías. Por ejemplo, en ingeniería existe un componente llamado de "fundamentación" que requiere que el estudiante apruebe el conjunto de materias que completan la cantidad de créditos asignados al componente. Las materias que hacen parte del componente no siempre aparecen en la malla, además no es fácil conocer los pre-requisitos necesarios de la asignatura incluso con la malla como apoyo. The Graphus ayuda a resolver estos problemas.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  A quien nos dirigimos
                </div>
                <h3 className="mt-0 mb-12">
                  Los clientes reconocen el problema?
                </h3>
                <p className="m-0">
                  La inscripción de materias es una parte muy importante durante el desarrollo de la carrera universitaria. Una inscripción confiable permite disminuir el riesgo de retrasos en el avance e incluso permiten tomar decisiones en caso de imprevistos como tener que repetir una materia. La idea de The Graphus nace de los inconvenientes que los estudiantes presentan al seguir el plan de estudios.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Nuestro enfoque
                </div>
                <h3 className="mt-0 mb-12">
                  Que se resuelve?
                </h3>
                <p className="m-0">
                  La información referente al plan de estudios (malla curricular) no se encuentra integrada en el mismo lugar en que los estudiantes encuentran la información sobre su respectiva historia académica. Debido a esto, los estudiantes solo tienen la oportunidad de conocer las materias que pueden cursar durante la inscripción de materias y no en otros momentos. La universidad nacional de Colombia maneja el avance del plan de estudios por créditos aprobados en grupos determinados o categorías. Por ejemplo, en ingeniería existe un componente llamado de "fundamentación" que requiere que el estudiante apruebe el conjunto de materias que completan la cantidad de créditos asignados al componente. Las materias que hacen parte del componente no siempre aparecen en la malla, además no es fácil conocer los pre-requisitos necesarios de la asignatura incluso con la malla como apoyo. The Graphus ayuda a resolver estos problemas.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Nuestro plan de acción
                </div>
                <h3 className="mt-0 mb-12">
                  Como se resuelve?
                </h3>
                <p className="m-0">
                  The Graphus integra la información que existe en las mallas con la información de la historia académica y las materias disponibles durante la inscripción. Esta información no siempre está disponible ni se encuentra en el mismo sitio. Con The Graphus el estudiante podrá realizar un seguimiento a las inscripciones realizadas en periodos previos, avance de carrera e inscripción de materias en un solo lugar.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;