import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Profile = () => {
  const { register, handleSubmit, reset } = useForm();

  const updateUserData = async (data) => {
    console.log('funcion front createEntry');

    console.log('this is data', data);

    try {
      await axios.put(`http://localhost:5000/api/users/edit/${data.name}`, data);
      reset()
      
    } catch (error) {
      console.log(error);
    }
  }
  

  return <main className='profile-main'>
    <div className="profile-main-container">
      <div className="profile-header">
        <h1>Define tu perfil</h1>
        <p>Con este formularío nos aportas la información suficiente para poder definir el perfil de
          tu familia y al tenerlo podrás utilizar el resto de herramientas
          y contenidos exclusivos para familias.</p>
      </div>
      </div>

    <form  onSubmit={handleSubmit( updateUserData)}>
    
      <div className="profile-data-1">
        <div className="ceter-inputs">
        <h2 className='title-profile white'>1. Datos Personales</h2>
        </div>
        
        <div className="ceter-inputs">
         
                <div className="input-label">
                <label htmlFor="name"> Nombre*</label>
                <input  {...register("name")} type="text" name="name" id="name"  className='bg-white'/>
                </div>
                <div className="input-label">
                <label htmlFor="surname"> Apellidos*</label>
            <input  {...register('surname')} type="text" name="surname" id="name" className='bg-white'/>
                </div>
                <div className="input-label">
                <label htmlFor="province"> Provincia*</label>
            <select {...register('province')} name="province" id="province" className='bg-white'>
                      <option value="">Elige Provincia</option>
                      <option value="Alava">Álava/Araba</option>
                      <option value="Albacete">Albacete</option>
                      <option value="Alicante">Alicante</option>
                      <option value="Almería">Almería</option>
                      <option value="Asturias">Asturias</option>
                      <option value="Ávila">Ávila</option>
                      <option value="Badajoz">Badajoz</option>
                      <option value="Baleares">Baleares</option>
                      <option value="Barcelona">Barcelona</option>
                      <option value="Burgos">Burgos</option>
                      <option value="Cáceres">Cáceres</option>
                      <option value="Cádiz">Cádiz</option>
                      <option value="Cantabria">Cantabria</option>
                      <option value="Castellón">Castellón</option>
                      <option value="Ceuta">Ceuta</option>
                      <option value="Ciudad Real">Ciudad Real</option>
                      <option value="Córdoba">Córdoba</option>
                      <option value="Cuenca">Cuenca</option>
                      <option value="Girona">Gerona/Girona</option>
                      <option value="Granada">Granada</option>
                      <option value="Guadalajara">Guadalajara</option>
                      <option value="Gipuzkoa">Guipúzcoa/Gipuzkoa</option>
                      <option value="Huelva">Huelva</option>
                      <option value="Huesca">Huesca</option>
                      <option value="Jaén">Jaén</option>
                      <option value="Coruna">La Coruña/A Coruña</option>
                      <option value="La Rioja">La Rioja</option>
                      <option value="Las Palmas">Las Palmas</option>
                      <option value="León">León</option>
                      <option value="Lleida">Lérida/Lleida</option>
                      <option value="Lugo">Lugo</option>
                      <option value="Madrid">Madrid</option>
                      <option value="Málaga">Málaga</option>
                      <option value="Melilla">Melilla</option>
                      <option value="Murcia">Murcia</option>
                      <option value="Navarra">Navarra</option>
                      <option value="Orense">Orense/Ourense</option>
                      <option value="Palencia">Palencia</option>
                      <option value="Pontevedra">Pontevedra</option>
                      <option value="Salamanca">Salamanca</option>
                      <option value="Segovia">Segovia</option>
                      <option value="Sevilla">Sevilla</option>
                      <option value="Soria">Soria</option>
                      <option value="Tarragona">Tarragona</option>
                      <option value="Tenerife">Tenerife</option>
                      <option value="Teruel">Teruel</option>
                      <option value="Toledo">Toledo</option>
                      <option value="Valencia">Valencia</option>
                      <option value="Valladolid">Valladolid</option>
                      <option value="Vizcaya">Vizcaya/Bizkaia</option>
                      <option value="Zamora">Zamora</option>
                      <option value="Zaragoza">Zaragoza</option>
                </select>
                </div>
                <div className="input-label">
                <label htmlFor="zipcode"> Código postal*</label>
                <input {...register('zipcode')} type="text" name="zipcode" id="zipcode" className='bg-white' />
                </div>
          </div>
      </div>
{/*---------------------------------------------------------------------------------  */}
      <div className="profile-data-2">
      <div className="ceter-inputs">
        <h2 className='title-profile black'>2. Datos de Familia</h2>
      </div>
        <div className="ceter-inputs">
          <div className="input-label">
            <label htmlFor="familyName">Nombre de familia*</label>
            <input  {...register('familyName')} type="text" name="familyName" id="familyName" />
          </div>
          <div className="input-label">
            <label htmlFor="familyType">Tipo de familia*</label>
            <select {...register('familyType')} name="familyType" id="familyType" >
              <option value="">seleciona opcion</option>
              <option value="biparental">Biparental</option>
              <option value="monoparental">Monoparental</option>
              <option value="homoparental">Homoparental</option>
            </select>
          </div>
          <div className="input-label">
            <label htmlFor="hostType">Tipo de acogida*</label>
            <select {...register('hostType')} name="hostType" id="hostType" >
              <option value="">seleciona opcion</option>
              <option value="extensive">Extensa</option>
              <option value="foreign">Ajena</option>
            </select>
          </div>

          <div className="input-label">
            <label htmlFor="foserTime">Tiempo de acogimiento*</label>
            <select {...register('fosterTime')} name="fosterTime" id="fosterTime" >
              <option value="">seleciona opcion</option>
              <option value="0-1">0-1</option>
              <option value="1-2">1-2</option>
              <option value="2-3">2-3</option>
              <option value="3+">3+</option>
            </select>
          </div>

          <div className="input-label">
            <label htmlFor="biologicalChildren">Hijos Biologicos *</label>
            <select {...register('biologicalChildren')} name="biologicalChildren" id="biologicalChildren" >
              <option value="">seleciona opcion</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">+4</option>
            </select>
          </div>
          <div className="input-label">
            <label htmlFor="fosterChildren">Hijos en acogida*</label>
            <select {...register('fosterChildren')} name="fosterChildren" id="fosterChildren" >
              <option value="">seleciona opcion</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">+4</option>
            </select>
          </div>
          <div className="title-form">
          <h3>Padre 1</h3>
          </div>
          
          <div className="input-label">
            <label htmlFor="parentOne-studys">Nivel de estudios*</label>
            <select  {...register('parentOne-studies')} name="parentOne-studies" id="parentOne-studies" >
              <option value="">seleciona opcion</option>
              <option value="0">0. Nivel infantil</option>
              <option value="1">1. Educación Primaria</option>
              <option value="2">2. Bachillerato</option>
              <option value="3">3. Fomación profesional</option>
              <option value="4">4. Carrera Universitaria</option>
              <option value="5">5. Másteres y postgrado</option>
              <option value="6">6. Doctorados</option>
            </select>
          </div>
          <div className="input-label">
            <label htmlFor="parentOneArea">Area de profesion*</label>
            <input {...register('parentOneArea')} type="text" name="parentOneArea" id="parentOneArea" />
          </div>
          <div className="input-label">
            <label htmlFor="parentOneBirth">Fecha de Nacimiento*</label>
            <input {...register('parentOneBirth')} type="date" name="parentOneBirth" id="parentOneBirth" />
          </div>

          <div className="title-form">
          <h3>Padre 2</h3>
          </div>
          <div className="input-label">
            <label htmlFor="parentTwostudies">Nivel de estudios*</label>
            <select {...register('parentTwostudies')} name="parentTwostudies" id="parentTwostudies" >
              <option value="">seleciona opcion</option>
              <option value="0">0. Nivel infantil</option>
              <option value="1">1. Educación Primaria</option>
              <option value="2">2. Bachillerato</option>
              <option value="3">3. Fomación profesional</option>
              <option value="4">4. Carrera Universitaria</option>
              <option value="5">5. Másteres y postgrado</option>
              <option value="6">6. Doctorados</option>
            </select>
          </div>
          <div className="input-label">
            <label htmlFor="parentTwoArea">Area de profesion*</label>
            <input  {...register('parentTwoArea')} type="text" name="parentTwoArea" id="parentTwoArea" />
          </div>
          <div className="input-label ">
            <label htmlFor="parentTwoBirth">Fecha de Nacimiento*</label>
            <input {...register('parentTwoBirth')}  type="date" name="parentTwoBirth" id="parentTwoBirth" />
          </div>
        </div>
        </div>
{/*---------------------------------------------------------------------------------  */}
      <div className="profile-data-3">
        <div className="ceter-inputs">
          <h2 className='title-profile white'>3. Datos hijos</h2>
        </div>
      
      </div>
{/*---------------------------------------------------------------------------------  ----*/}
      <div className="profile-data-4">
      <div className="ceter-inputs">
          <h2 className='title-profile black'>4. Autenticación</h2>
        </div>
  
        <div className="ceter-inputs">
          
          <div className="input-label">
          <label htmlFor="criminalRecord"> Numero de referencia del Certificado de Antencedentes penales y de delitos de Naturaleza Sexual</label>
          <input {...register('criminalRecord')} type="text" name="criminalRecord" id="criminalRecord" />
          </div>
          <div className="checkbox">
            <div className="left-check">
            <input  {...register('privacyPolicy')} type="checkbox" name="privacyPolicy" id="" />
            <label htmlFor="privacyPolicy">Confirmo que he leído la política de privacidad de Entre Familias y doy mi consentimiento para el tratamiento
              de mis datos personales con fines de de seguridad,
              determinación de perfiles y comunicación..</label>
            </div>
            
            <div className="left-check">
            <input  {...register('termsCondition')} type="checkbox" name="termsCondition" id="" />
            <label htmlFor="termsCondition">Confirmo que he leído la política de privacidad de Entre Familias y doy mi consentimiento para el tratamiento
              de mis datos personales con fines de de seguridad,
              determinación de perfiles y comunicación..</label>
            </div>

          
          </div>
          
          </div>
        </div>
      <div className="btn-cont">
      <input type="submit" value="Unirme a la comunidad" />
      </div>
       
      </form>
     
   
  </main>;
};

export default Profile;
