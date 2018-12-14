import React from 'react'
import './styles.scss'

const PricingTable = () => (
  <div class="wrapper light-wrapper">
    <div class="container inner">
      <h2 class="section-title text-center">Our Prices</h2>
      <p class="lead text-center">
        Awesome deals with simple pricing model are here! We offer great prices,
        <br class="d-none d-xl-block" />
        premium products and quality service for your business.
      </p>
      <div class="space30" />
      <div class="row no-gutter">
        <div class="col-md-4">
          <div class="pricing panel">
            <div class="panel-heading">
              <div class="icon icon-color color-default fs-48">
                <i class="si-building_home" />
              </div>
              <h4 class="panel-title color-dark">Individuals</h4>
              <div class="price color-dark">
                <span class="price-currency">$</span>
                <span class="price-value">35</span>{' '}
                <span class="price-duration">year</span>
              </div>
            </div>
            <div class="panel-body">
              <table class="table">
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
            <div class="panel-footer">
              {' '}
              <a href="#" class="btn btn-full-rounded" role="button">
                Choose Plan
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="pricing panel">
            <div class="panel-heading">
              <div class="icon icon-color color-default fs-48">
                <i class="si-building_small-shop" />
              </div>
              <h4 class="panel-title color-dark">Small Team</h4>
              <div class="price color-dark">
                {' '}
                <span class="price-currency">$</span>
                <span class="price-value">45</span>{' '}
                <span class="price-duration">year</span>
              </div>
            </div>
            <div class="panel-body">
              <table class="table">
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
            <div class="panel-footer">
              {' '}
              <a href="#" class="btn btn-full-rounded" role="button">
                Choose Plan
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="pricing panel">
            <div class="panel-heading">
              <div class="icon icon-color color-default fs-48">
                <i class="si-building_resident-block" />
              </div>
              <h4 class="panel-title color-dark">Organization</h4>
              <div class="price color-dark">
                {' '}
                <span class="price-currency">$</span>
                <span class="price-value">55</span>{' '}
                <span class="price-duration">year</span>
              </div>
            </div>
            <div class="panel-body">
              <table class="table">
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
            <div class="panel-footer">
              {' '}
              <a href="#" class="btn btn-full-rounded" role="button">
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
