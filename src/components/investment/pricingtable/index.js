import React from 'react'
import './styles.scss'

const PricingTable = () => (
  <div className="wrapper light-wrapper">
    <div className="container inner">
      <h2 className="section-title text-center">Our Prices</h2>
      <p className="lead text-center">
        Awesome deals with simple pricing model are here! We offer great prices,
        <br className="d-none d-xl-block" />
        premium products and quality service for your business.
      </p>
      <div className="space30" />
      <div className="row no-gutter">
        <div className="col-md-4">
          <div className="pricing panel">
            <div className="panel-heading">
              <div className="icon icon-color color-default fs-48">
                <i className="si-building_home" />
              </div>
              <h4 className="panel-title color-dark">Individuals</h4>
              <div className="price color-dark">
                <span className="price-currency">$</span>
                <span className="price-value">35</span>{' '}
                <span className="price-duration">year</span>
              </div>
            </div>
            <div className="panel-body">
              <table className="table">
                <tr>
                  <td>
                    <strong>1</strong> Project{' '}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>100K</strong> API Access{' '}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>100MB</strong> Storage{' '}
                  </td>
                </tr>
                <tr>
                  <td>
                    Custom <strong>Cloud</strong> Services{' '}
                  </td>
                </tr>
                <tr>
                  <td>
                    Weekly <strong>Reports</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    {' '}
                    7/24 <strong>Support</strong>
                  </td>
                </tr>
              </table>
            </div>
            <div className="panel-footer">
              {' '}
              <a href="#" className="btn btn-full-rounded" role="button">
                Choose Plan
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="pricing panel">
            <div className="panel-heading">
              <div className="icon icon-color color-default fs-48">
                <i className="si-building_small-shop" />
              </div>
              <h4 className="panel-title color-dark">Small Team</h4>
              <div className="price color-dark">
                {' '}
                <span className="price-currency">$</span>
                <span className="price-value">45</span>{' '}
                <span className="price-duration">year</span>
              </div>
            </div>
            <div className="panel-body">
              <table className="table">
                <tr>
                  <td>
                    <strong>5</strong> Projects{' '}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>100K</strong> API Access{' '}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>200MB</strong> Storage{' '}
                  </td>
                </tr>
                <tr>
                  <td>
                    {' '}
                    Custom <strong>Cloud</strong> Services{' '}
                  </td>
                </tr>
                <tr>
                  <td>
                    {' '}
                    Weekly <strong>Reports</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    {' '}
                    7/24 <strong>Support</strong>
                  </td>
                </tr>
              </table>
            </div>
            <div className="panel-footer">
              {' '}
              <a href="#" className="btn btn-full-rounded" role="button">
                Choose Plan
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="pricing panel">
            <div className="panel-heading">
              <div className="icon icon-color color-default fs-48">
                <i className="si-building_resident-block" />
              </div>
              <h4 className="panel-title color-dark">Organization</h4>
              <div className="price color-dark">
                {' '}
                <span className="price-currency">$</span>
                <span className="price-value">55</span>{' '}
                <span className="price-duration">year</span>
              </div>
            </div>
            <div className="panel-body">
              <table className="table">
                <tr>
                  <td>
                    <strong>20</strong> Projects{' '}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>300K</strong> API Access{' '}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>500MB</strong> Storage{' '}
                  </td>
                </tr>
                <tr>
                  <td>
                    {' '}
                    Custom <strong>Cloud</strong> Services{' '}
                  </td>
                </tr>
                <tr>
                  <td>
                    {' '}
                    Weekly <strong>Reports</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    {' '}
                    7/24 <strong>Support</strong>
                  </td>
                </tr>
              </table>
            </div>
            <div className="panel-footer">
              {' '}
              <a href="#" className="btn btn-full-rounded" role="button">
                Choose Plan
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default PricingTable
