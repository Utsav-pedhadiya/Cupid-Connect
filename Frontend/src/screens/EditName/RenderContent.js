// RenderContent.js
import React from 'react';
import {View, Dimensions} from 'react-native';
import styles from './style';
import HeadingText from '../../component/HeadingText';
import {ProfileInputBoxName} from './ProfileInputBoxName';
import {ProfileInputBoxHeight} from './ProfileInputBoxHeight';
import {ProfileInputBoxAbout} from './ProfileInputBoxAbout';
import {PORCompo} from './PORCompo';
import {CityCompo} from './CityCompo';
import {NationalityCompo} from './NationalityCompo';
import {BodyToneCompo} from './BodyToneCompo';
import {HealthStatusCompo} from './HealthStatusCompo';
import {JobCompo} from './JobCompo';
import {FinancialCompo} from './FinancialCompo';
import {AgeCompo} from './AgeCompo';
import {ProfileInputBoxRecipes} from './ProfileInputBoxRecipes';
import {HobbiesCompo} from './HobbiesCompo';
import {ProfileInputBoxSon} from './ProfileInputBoxSon';
import {GenderCompo} from './GenderCompo';
import {LineageCompo} from './LineageCompo';
import {MaritalStatusCompo} from './MaritalStatusCompo';
import {SkinColorCompo} from './SkinColorCompo';
import {ReligiousCommitmentrCompo} from './ReligiousCommitmentrCompo';
import {MarriageCompo} from './MarriageCompo';
import {HijabCompo} from './HijabCompo';

const RenderContent = ({
  title,
  profileDetails,
  handleUpdate,
  gender,
  setGender,
  lineage,
  Setlineage,
  setSelecteLineage,
  selectedLineage,
  religious,
  SetReligious,
  selectedHobbies,
  setSelectedHobbies,
  FormatedHobbies,
  nationality,
  setNationality,
  nation,
  setSelectedNationality,
  selectedNationality,
  por,
  Setpor,
  Por,
  setSelectedPOR,
  selectedPOR,
  handleCity,
  city,
  Setcity,
  City,
  setSelectedCity,
  selectedCity,
  job,
  setSelecteJob,
  selectedJob,
  setSelectedMarriage,
  selectedMarriage,
  Setmarriage,
  marriage,
  hijab,
  Sethijab,
  setSelectedHijab,
  selectedHijab,
  skin,
  marital,
  Setmarital,
  selectedMarital,
  setSelecteMarital,
  selectedFinancial,
  setSelecteFinancial,
  financial,
  selectedBody,
  setSelecteBody,
  body,
  selectedHelth,
  setSelecteHelth,
  health,
  setSkin,
  Qualities,
  id,
}) => {
  const contentMap = {
    Name: (
      <ProfileInputBoxName
        title={'Name'}
        value={profileDetails?.name}
        onSaveData={handleUpdate}
      />
    ),
    Height: (
      <ProfileInputBoxHeight
        title={'Height'}
        value={profileDetails?.height}
        onSaveData={handleUpdate}
      />
    ),
    'About me': (
      <ProfileInputBoxAbout
        title={'About me'}
        value={profileDetails?.write_about_yourself}
        onSaveData={handleUpdate}
      />
    ),
    'Recipes I look for': (
      <ProfileInputBoxRecipes
        title={'Recipes I look for'}
        value={Qualities}
        onSaveData={handleUpdate}
      />
    ),
    'Number of sons': (
      <ProfileInputBoxSon
        title={'Number of sons'}
        value={profileDetails?.number_of_children}
        onSaveData={handleUpdate}
      />
    ),
    Hobbies: (
      <HobbiesCompo
        title={title}
        selectedHobbies={selectedHobbies}
        FormatedHobbies={FormatedHobbies}
        setSelectedHobbies={setSelectedHobbies}
        onSaveData={handleUpdate}
      />
    ),
    Gender: (
      <GenderCompo
        title={title}
        gender={gender}
        onSaveData={handleUpdate}
        setGender={setGender}
      />
    ),
    Age: (
      <AgeCompo
        title={title}
        value={profileDetails?.age}
        onSaveData={handleUpdate}
        Agetitle={profileDetails?.age}
      />
    ),
    Nationality: (
      <NationalityCompo
        id={id}
        title={title}
        nationality={nationality}
        setNationality={setNationality}
        nation={nation}
        setSelectedNationality={setSelectedNationality}
        onSaveData={handleUpdate}
        selectedNationality={selectedNationality}
      />
    ),
    'Place Of Residence': (
      <PORCompo
        id={id}
        title={title}
        Por={Por}
        Setpor={Setpor}
        por={por}
        setSelectedPOR={setSelectedPOR}
        selectedPOR={selectedPOR}
        onSaveData={handleUpdate}
        handleCity={handleCity}
      />
    ),
    City: (
      <CityCompo
        id={id}
        title={title}
        setSelectedCity={setSelectedCity}
        selectedCity={selectedCity}
        Setcity={Setcity}
        City={City}
        city={city}
        onSaveData={handleUpdate}
      />
    ),
    Job: (
      <JobCompo
        title={title}
        job={job}
        setSelecteJob={setSelecteJob}
        selectedJob={selectedJob}
        onSaveData={handleUpdate}
      />
    ),
    'Type Of Marriage': (
      <MarriageCompo
        title={title}
        marriage={marriage}
        Setmarriage={Setmarriage}
        onSaveData={handleUpdate}
      />
    ),
    'Type Of Hijab': (
      <HijabCompo
        title={title}
        hijab={hijab}
        Sethijab={Sethijab}
        onSaveData={handleUpdate}
      />
    ),
    Lineage: (
      <LineageCompo
        title={title}
        lineage={lineage}
        setSelecteLineage={setSelecteLineage}
        selectedLineage={selectedLineage}
        onSaveData={handleUpdate}
        Setlineage={Setlineage}
      />
    ),
    'Skin Color': (
      <SkinColorCompo
        title={title}
        skin={skin}
        onSaveData={handleUpdate}
        setSkin={setSkin}
      />
    ),
    'Religious Commitment': (
      <ReligiousCommitmentrCompo
        title={title}
        religious={religious}
        onSaveData={handleUpdate}
        SetReligious={SetReligious}
      />
    ),
    'Financial situation': (
      <FinancialCompo
        title={title}
        financial={financial}
        setSelecteFinancial={setSelecteFinancial}
        selectedFinancial={selectedFinancial}
        onSaveData={handleUpdate}
      />
    ),
    'Body Tone': (
      <BodyToneCompo
        title={title}
        body={body}
        setSelecteBody={setSelecteBody}
        selectedBody={selectedBody}
        onSaveData={handleUpdate}
      />
    ),
    'Marital Status': (
      <MaritalStatusCompo
        title={title}
        marital={marital}
        selectedMarital={selectedMarital}
        setSelecteMarital={setSelecteMarital}
        onSaveData={handleUpdate}
        Setmarital={Setmarital}
      />
    ),
    'Health status': (
      <HealthStatusCompo
        title={title}
        health={health}
        setSelecteHelth={setSelecteHelth}
        selectedHelth={selectedHelth}
        onSaveData={handleUpdate}
      />
    ),
  };

  return (
    contentMap[title] || (
      <View style={styles.heading}>
        <HeadingText title={title} />
      </View>
    )
  );
};

export default RenderContent;
