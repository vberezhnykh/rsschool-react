import React from 'react';

type FormCardProps = {
  name: string;
  surname: string;
  dateOfBirth: string;
  residence: string;
  nameConsent: boolean;
  surnameConsent: boolean;
  dateOfBirthConsent: boolean;
  residenceConsent: boolean;
  sex: string;
};

class FormCard extends React.Component<FormCardProps> {
  constructor(props: FormCardProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Surname: {this.props.surname}</p>
        <p>Date of Birth: {this.props.dateOfBirth}</p>
        <p>Residence: {this.props.residence}</p>
        <p>Sex: {this.props.sex}</p>
        <p>Profile Picture: </p>
        <ul>
          Consent:
          <li>Name: {this.props.nameConsent ? '✓' : '✗'}</li>
          <li>Surname: {this.props.surnameConsent ? '✓' : '✗'}</li>
          <li>Date of Birth: {this.props.dateOfBirthConsent ? '✓' : '✗'}</li>
          <li>Residence: {this.props.residenceConsent ? '✓' : '✗'}</li>
        </ul>
      </div>
    );
  }
}

export default FormCard;
