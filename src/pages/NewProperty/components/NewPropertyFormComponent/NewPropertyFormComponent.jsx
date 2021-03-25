import React, { useState } from 'react';
import Select from 'react-select';

const NewPropertyFormComponent = () => {


  return (
    <div>
      <form>
        <div>
          <label htmlFor="title">
            <h3>Title</h3>
            <input type="text" id="title" onChange={} />
          </label>
        </div>
        <div>
          <label htmlFor="blurb">
            <h3>Description</h3>
            <textarea id="blurb" placeholder="Add a short description of the property" onChange={} />
          </label>
        </div>
        <div>
          <label htmlFor="address">
            <h3>Address</h3>
            <input type="text" id="address" placeholder="Enter the first line address..." onChange={} />
          </label>
        </div>
        <div>
          <label htmlFor="town">
            <h3>Town</h3>
            <input type="text" id="town" placeholder="Enter the town..." onChange={} />
          </label>
        </div>
        <div>
          <label htmlFor="postcode">
            <h3>Postcode/ZipCode</h3>  has_many :properties
        <div>
          <label htmlFor="price">
            <h3>Rental Cost Per Month</h3>
            <input type="number" id="price" onChange={} />
          </label>
        </div>
        <div>
          <h3>Are Bills Included?</h3>
          <span>
            <label htmlFor="included">
              <p>Included</p>
              <input type="radio" id="included" name="bills" value="Included" />
            </label>
          </span>
          <span>
            <label htmlFor="not included">
              <p>Not Included</p>
              <input type="radio" id="notIncluded" name="bills" value="Not Included" onchange={} />
            </label>
          </span>
        </div>
        <div>
          <h3>How Much Is The Deposit?</h3>
          <label htmlFor="deposit">
            <h3>Deposit</h3>
            <input type="number" id="deposit" onChange={} />
          </label>
        </div>
        <div>
          <h3>Is There Parking?</h3>
          <span>
            <label htmlFor="parking">
              <p>Parking</p>
              <input type="radio" id="parking" name="parking" value="Parking" />
            </label>
          </span>
          <span>
            <label htmlFor="noParking">
              <p>No Parking</p>
              <input type="radio" id="noParking" name="parking" value="No Parking" />
            </label>
          </span>
        </div>
        <div>
          <label htmlFor="occupantCount">
            <h3>How Many People Live Here Currently?</h3>
            <input type="number" id="occupantCount" onChange={} />
          </label>
        </div>
        <div>
          <label htmlFor="roomCount">
            <h3>How Many Rooms Are Available?</h3>
            <input type="number" id="roomCount" onChange={} />
          </label>
        </div>
        <div>
          <h3>Are There Any Outside Areas?</h3>
          <Select
            options={outsideOptions}
            isMulti
            onChange={}
            name="outsideAreas"
          />
        </div>
        <div>
          <h3>Is There Disabled Access?</h3>
          <span>
            <label htmlFor="disabledAccess">
              <p>Disabled Access</p>
              <input type="radio" id="disabledAccess" name="disabledAccess" value="Disabled Access" />
            </label>
          </span>
          <span>
            <label htmlFor="noDisabledAccess">
              <p>No Disabled Access</p>  has_many :properties
        </div>
        <div>
          <h3>Is Internet Provided?</h3>
          <span>
            <label htmlFor="internet">
              <p>Internet Provided</p>
              <input type="radio" id="internet" name="internet" value="Internet Included" />
            </label>
          </span>
          <span>
            <label htmlFor="noInternet">
              <p>No Internet Provided</p>
              <input type="radio" id="noInternet" name="internet" value="No Internet Included" />
            </label>
          </span>
        </div>
        <div>
          <label htmlFor="minAge">
            <h3>Lowest Flatmate Age</h3>
            <input type="number" id="minAge" onChange={} />
          </label>
        </div>
        <div>
          <label htmlFor="maxAge">
            <h3>Highest Flatmate Age</h3>
            <input type="number" id="maxAge" onChange={} />
          </label>
        </div>
        <div>
          <h3>Is Smoking Allowed?</h3>
          <span>
            <label htmlFor="smoking">
              <p>Smoking</p>
              <input type="radio" id="smoking" name="smoking" value="Smoking" />
            </label>
          </span>
          <span>
            <label htmlFor="nonSmoking">
              <p>Non-Smoking</p>
              <input type="radio" id="nonSmoking" name="smoking" value="Non-Smoking" />
            </label>
          </span>
          <span>
            <label htmlFor="anySmoking">
              <p>Any</p>
              <input type="radio" id="anySmoking" name="smoking" value="Any" />
            </label>
          </span>
        </div>
        <div>
          <h3>Are There Any Animals?</h3>
          <Select
            options={petsOptions}
            isMulti
            onChange={}
            name="pets"
          />
        </div>
        <div>
          <h3>What Genders Are The Flatmates?</h3>  has_many :properties
          <Select
            options={gendersOptions}
            isMulti
            onChange={}
            name="genders"
          />
        </div>
        <div>
          <h3>What Are The Occupations Per Flatmate?</h3>
          <Select
            options={occupationsOptions}
            isMulti
            onChange={}
            name="occupations"
          />
        </div>
        <div>
          <button type="submit">
            Create New Property
          </button>
        </div>
      </form>
    </div>
  );
};