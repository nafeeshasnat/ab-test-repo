(function() {
  var debug = 0;
  var variation_name = "Free expedited holiday shipping (100%)";

  if (window.location.href.indexOf('qa-debug') > -1 || localStorage.getItem('qa_debug')) {
    debug = 1;
    localStorage.setItem('qa_debug', true);
    console.log('>> ' + variation_name);
  }
  try {
    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function() {
        if (
          document &&
          document.querySelector(selector) &&
          document.querySelectorAll(selector).length > 0
        ) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function() {
        clearInterval(interval);
      }, delayTimeout);
    }

    var customHTML = 
      '<section class="ab-aml-section">' + 
      '        <div class="ab-aml-container">' + 
      '          <div class="ab-aml-column">' + 
      '            <h2 class="ab-aml-header">' + 
      '              AML Compliance</h2>' + 
      '            <p class="ab-aml-subheader">' + 
      '              You fight financial crime. We help you do it better.</p>' + 
      '          </div>' + 
      '          <a href="" class="ab-aml-btn ab-button-global">' + 
      '            Learn More</a>' + 
      '        </div>' + 
      '      </section>' + 
      '' + 
      '      <section class="ab-vertical-tab-section">' + 
      '        <div class="ab-tab-desktop-visible">' + 
      '          <div class="ab-vertical-tab-container">' + 
      '            <div class="ab-vertical-tab-item ab-tab-selected">' + 
      '              <h3 class="ab-vertical-tab-item-header">360 View of Client Risk</h3>' + 
      '              <p class="ab-vertical-tab-item-subheader">Automatic updates of significant changes to client risk levels</p>' + 
      '            </div>' + 
      '            <div class="ab-vertical-tab-item">' + 
      '              <h3 class="ab-vertical-tab-item-header">Identity Verification and KYC Compliance</h3>' + 
      '              <p class="ab-vertical-tab-item-subheader">A real-time transaction monitoring and screening solution to help you stay ahead of bad actors and changing regulations</p>' + 
      '            </div>' + 
      '            <div class="ab-vertical-tab-item">' + 
      '              <h3 class="ab-vertical-tab-item-header">Transaction Monitoring</h3>' + 
      '              <p class="ab-vertical-tab-item-subheader">' + 
      '                Real-time monitoring and real insights.</p>' + 
      '            </div>' + 
      '            <div class="ab-vertical-tab-item">' + 
      '              <h3 class="ab-vertical-tab-item-header">Watchlist, PEP and Sanctions Screening</h3>' + 
      '              <p class="ab-vertical-tab-item-subheader">Screen entities against the latest watchlists, sanctions lists and PEP lists, and pay only for the screening data you need</p>' + 
      '            </div>' + 
      '            <div class="ab-vertical-tab-item">' + 
      '              <h3 class="ab-vertical-tab-item-header">Risk Scoring</h3>' + 
      '              <p class="ab-vertical-tab-item-subheader">Accurately assess and manage risks throughout your client relationships</p>' + 
      '            </div>' + 
      '            <div class="ab-vertical-tab-item">' + 
      '              <h3 class="ab-vertical-tab-item-header">Regulatory Reporting</h3>' + 
      '              <p class="ab-vertical-tab-item-subheader">Automate compliance reporting to reduce manual efforts and improve accuracy</p>' + 
      '            </div>' + 
      '            <div class="ab-vertical-tab-item">' + 
      '              <h3 class="ab-vertical-tab-item-header">Enhanced Due Diligence (EDD)</h3>' + 
      '              <p class="ab-vertical-tab-item-subheader">Order reports directly from our application and receive them in 1/3 of the time for 1/3 of the average industry price</p>' + 
      '            </div>' + 
      '            <div class="ab-vertical-tab-item">' + 
      '              <h3 class="ab-vertical-tab-item-header">Case Management</h3>' + 
      '              <p class="ab-vertical-tab-item-subheader">Simplify your workload with customizable workflows for efficient resolutions</p>' + 
      '            </div>' + 
      '          </div>' + 
      '' + 
      '          <div class="ab-tab-content-container">' + 
      '            <div class="ab-tab-content">' + 
      '              <div class="ab-teb-content-details">' + 
      '                <img src="https://cdn-3.convertexperiments.com/uf/1002950/10025531/p1-ico.png" alt="" class="icon">' + 
      '                <h2 class="ab-tab-content-header">360 View of Client Risk</h2>' + 
      '                <ul class="ab-tab-content-checklist">' + 
      '                  <li>A Complete View of Each Client\'s Risk Levels</li>' + 
      '                  <li>Adaptable Risk Model</li>' + 
      '                  <li>Automated Notifications of Significant Changes to Client Risk Levels</li>' + 
      '                  <li>Quick Access to Explanations Behind Client Risk Level Changes</li>' + 
      '                </ul>' + 
      '                <a href="" class="ab-tab-content-btn ab-button-global">Learn More</a>' + 
      '              </div>' + 
      '              <div class="ab-tab-content-img-container ab-tab-1">' + 
      '                <div class="ab-tab-img ab-tab-img-1">' + 
      '                </div>' + 
      '              </div>' + 
      '            </div>' + 
      '' + 
      '            <div class="ab-tab-content">' + 
      '              <div class="ab-teb-content-details">' + 
      '                <img src="https://cdn-3.convertexperiments.com/uf/1002950/10025531/p2-ico.png" alt="" class="icon">' + 
      '                <h2 class="ab-tab-content-header">Identity Verification and KYC Compliance</h2>' + 
      '                <ul class="ab-tab-content-checklist">' + 
      '                  <li>Seamless Integration With Existing Onboarding Systems</li>' + 
      '                  <li>Ongoing Monitoring for CDD and KYC Efforts</li>' + 
      '                  <li>Comprehensive Customer Due Diligence</li>' + 
      '                  <li>Configured For Your Organization</li>' + 
      '                  <li>Accelerated Client Onboarding</li>' + 
      '                </ul>' + 
      '                <a href="" class="ab-tab-content-btn ab-button-global">Learn More</a>' + 
      '              </div>' + 
      '              <div class="ab-tab-content-img-container ab-tab-1">' + 
      '                <div class="ab-tab-img ab-tab-img-2">' + 
      '                </div>' + 
      '              </div>' + 
      '            </div>' + 
      '' + 
      '            <div class="ab-tab-content">' + 
      '              <div class="ab-teb-content-details">' + 
      '                <img src="https://cdn-3.convertexperiments.com/uf/1002950/10025531/p3-ico.png" alt="" class="icon">' + 
      '                <h2 class="ab-tab-content-header">Transaction Monitoring</h2>' + 
      '                <ul class="ab-tab-content-checklist">' + 
      '                  <li>Real-Time, Periodic or Event-Based Monitoring</li>' + 
      '                  <li>Machine Learning and Rules-Based Analytics</li>' + 
      '                  <li>Workflows and Case Management for Flagged Transactions</li>' + 
      '                  <li>Immediate Insight Into Suspicious Activity</li>' + 
      '                  <li>Utilize Transaction Data to Strengthen Risk Scoring Capabilities</li>' + 
      '                  <li>A Solution That Grows With Your Business</li>' + 
      '                </ul>' + 
      '                <a href="" class="ab-tab-content-btn ab-button-global">Learn More</a>' + 
      '              </div>' + 
      '              <div class="ab-tab-content-img-container ab-tab-1">' + 
      '                <div class="ab-tab-img ab-tab-img-3">' + 
      '                </div>' + 
      '              </div>' + 
      '            </div>' + 
      '' + 
      '            <div class="ab-tab-content">' + 
      '              <div class="ab-teb-content-details">' + 
      '                <img src="https://cdn-3.convertexperiments.com/uf/1002950/10025531/p4-ico.png" alt="" class="icon">' + 
      '                <h2 class="ab-tab-content-header">Watchlist, PEP and Sanctions Screening</h2>' + 
      '                <ul class="ab-tab-content-checklist">' + 
      '                  <li>Access to the Latest Verified and Relevant Lists</li>' + 
      '                  <li>Real-Time, Periodic or Event-Based Screening</li>' + 
      '                  <li>Avoid Risky Relationships While Saving Money On Your Screening Data Costs</li>' + 
      '                  <li>Monitor for PEPs and Negative News</li>' + 
      '                  <li>Reduce False Positives With our New PEP Scoring Model</li>' + 
      '                  <li>Leverage Screening Intelligence Dashboards to Proactively Identify Efficiency Gains</li>' + 
      '                  <li>Dashboard and Audit Trails</li>' + 
      '                </ul>' + 
      '                <a href="" class="ab-tab-content-btn ab-button-global">Learn More</a>' + 
      '              </div>' + 
      '              <div class="ab-tab-content-img-container ab-tab-1">' + 
      '                <div class="ab-tab-img ab-tab-img-4">' + 
      '                </div>' + 
      '              </div>' + 
      '            </div>' + 
      '' + 
      '            <div class="ab-tab-content">' + 
      '              <div class="ab-teb-content-details">' + 
      '                <img src="https://cdn-3.convertexperiments.com/uf/1002950/10025531/p5-ico.png" alt="" class="icon">' + 
      '                <h2 class="ab-tab-content-header">Risk Scoring</h2>' + 
      '                <ul class="ab-tab-content-checklist">' + 
      '                  <li>Customizable Risk Scoring Models</li>' + 
      '                  <li>Data Integration With Our Sanctions Screening, Identity Verification and KYC, Transaction Monitoring and Regulatory Reporting Modules for Better Scoring</li>' + 
      '                  <li>Ongoing Monitoring for Accurate Scoring with Daily Updates</li>' + 
      '                  <li>Advanced Risk Factors Grouped by Profile and Activity</li>' + 
      '                  <li>Receive Alerts When a Client Surpasses Your Risk Threshold</li>' + 
      '                </ul>' + 
      '                <a href="" class="ab-tab-content-btn ab-button-global">Learn More</a>' + 
      '              </div>' + 
      '              <div class="ab-tab-content-img-container ab-tab-1">' + 
      '                <div class="ab-tab-img ab-tab-img-5">' + 
      '                </div>' + 
      '              </div>' + 
      '            </div>' + 
      '' + 
      '            <div class="ab-tab-content">' + 
      '              <div class="ab-teb-content-details">' + 
      '                <img src="https://cdn-3.convertexperiments.com/uf/1002950/10025531/p6-ico.png" alt="" class="icon">' + 
      '                <h2 class="ab-tab-content-header">Regulatory Reporting</h2>' + 
      '                <ul class="ab-tab-content-checklist">' + 
      '                  <li>Automated Regulatory Reporting for FinCEN, FINTRAC, goAML and M ore</li>' + 
      '                  <li>Automated Workflows and Intuitive Dashboards for Easier Investigations</li>' + 
      '                  <li>Export Reporting Data to Enhance Risk Scoring</li>' + 
      '                  <li>Real-Time, Periodic, or Event-Based Monitoring</li>' + 
      '                  <li>Dashboard and Audit Trails</li>' + 
      '                </ul>' + 
      '                <a href="" class="ab-tab-content-btn ab-button-global">Learn More</a>' + 
      '              </div>' + 
      '              <div class="ab-tab-content-img-container ab-tab-1">' + 
      '                <div class="ab-tab-img ab-tab-img-6">' + 
      '                </div>' + 
      '              </div>' + 
      '            </div>' + 
      '' + 
      '            <div class="ab-tab-content">' + 
      '              <div class="ab-teb-content-details">' + 
      '                <img src="https://cdn-3.convertexperiments.com/uf/1002950/10025531/p7-ico.png" alt="" class="icon">' + 
      '                <h2 class="ab-tab-content-header">Enhanced Due Diligence (EDD)</h2>' + 
      '                <ul class="ab-tab-content-checklist">' + 
      '                  <li>Comprehensive reports with in-depth background analysis</li>' + 
      '                  <li>A simplified process that notifies you when it is ready for review</li>' + 
      '                  <li>Use EDD report data to automatically update the entity\'s risk score</li>' + 
      '                  <li>Quickly delivered reports allow you to make timely decisions and keep your business compliant</li>' + 
      '                </ul>' + 
      '                <a href="" class="ab-tab-content-btn ab-button-global">Learn More</a>' + 
      '              </div>' + 
      '              <div class="ab-tab-content-img-container ab-tab-1">' + 
      '                <div class="ab-tab-img ab-tab-img-7">' + 
      '                </div>' + 
      '              </div>' + 
      '            </div>' + 
      '' + 
      '            <div class="ab-tab-content">' + 
      '              <div class="ab-teb-content-details">' + 
      '                <img src="https://cdn-3.convertexperiments.com/uf/1002950/10025531/p8-ico.png" alt="" class="icon">' + 
      '                <h2 class="ab-tab-content-header">Case Management</h2>' + 
      '                <ul class="ab-tab-content-checklist">' + 
      '                  <li>Intelligent Alert and Case Management Monitoring</li>' + 
      '                  <li>Role-Based Team Collaboration</li>' + 
      '                  <li>Highly Configurable, Intuitive Dashboards</li>' + 
      '                  <li>Granular Permission-Based Interaction</li>' + 
      '                </ul>' + 
      '                <a href="" class="ab-tab-content-btn ab-button-global">Learn More</a>' + 
      '              </div>' + 
      '              <div class="ab-tab-content-img-container ab-tab-1">' + 
      '                <div class="ab-tab-img ab-tab-img-8">' + 
      '                </div>' + 
      '              </div>' + 
      '            </div>' + 
      '' + 
      '          </div>' + 
      '        </div>' + 
      '' + 
      '        <div class="ab-tab-mobile-visible">' + 
      '          <div class="ab-vertical-tab-container">' + 
      '            <div class="ab-vertical-tab-item ab-tab-selected">' + 
      '              <h3 class="ab-vertical-tab-item-header">360 View of Client Risk</h3>' + 
      '              <p class="ab-vertical-tab-item-subheader">Automatic updates of significant changes to client risk levels</p>' + 
      '              <button class="ab-tab-mbl-btn">Learn More</button>' + 
      '              <div class="ab-tab-collapse ab-tab-collapse-active">' + 
      '                <ul class="ab-tab-content-checklist">' + 
      '                  <li>A Complete View of Each Client\'s Risk Levels</li>' + 
      '                  <li>Adaptable Risk Model</li>' + 
      '                  <li>Automated Notifications of Significant Changes to Client Risk Levels</li>' + 
      '                  <li>Quick Access to Explanations Behind Client Risk Level Changes</li>' + 
      '                </ul>' + 
      '                <a href="" class="ab-tab-content-btn ab-button-global">Learn More</a>' + 
      '              </div>' + 
      '            </div>' + 
      '            <div class="ab-vertical-tab-item">' + 
      '              <h3 class="ab-vertical-tab-item-header">Identity Verification and KYC Compliance</h3>' + 
      '              <p class="ab-vertical-tab-item-subheader">A real-time transaction monitoring and screening solution to help you stay ahead of bad actors and changing regulations</p>' + 
      '              <button class="ab-tab-mbl-btn">Learn More</button>' + 
      '              <div class="ab-tab-collapse">' + 
      '                <ul class="ab-tab-content-checklist">' + 
      '                        <li>Seamless Integration With Existing Onboarding Systems</li>' + 
      '                        <li>Ongoing Monitoring for CDD and KYC Efforts</li>' + 
      '                        <li>Comprehensive Customer Due Diligence</li>' + 
      '                        <li>Configured For Your Organization</li>' + 
      '                        <li>Accelerated Client Onboarding</li>' + 
      '                      </ul>' + 
      '                      <a href="" class="ab-tab-content-btn ab-button-global">Learn More</a>' + 
      '              </div>' + 
      '            </div>' + 
      '            <div class="ab-vertical-tab-item">' + 
      '              <h3 class="ab-vertical-tab-item-header">Transaction Monitoring</h3>' + 
      '              <p class="ab-vertical-tab-item-subheader">' + 
      '                Real-time monitoring and real insights.</p>' + 
      '              <button class="ab-tab-mbl-btn">Learn More</button>' + 
      '              <div class="ab-tab-collapse">' + 
      '                <ul class="ab-tab-content-checklist">' + 
      '                        <li>Real-Time, Periodic or Event-Based Monitoring</li>' + 
      '                        <li>Machine Learning and Rules-Based Analytics</li>' + 
      '                        <li>Workflows and Case Management for Flagged Transactions</li>' + 
      '                        <li>Immediate Insight Into Suspicious Activity</li>' + 
      '                        <li>Utilize Transaction Data to Strengthen Risk Scoring Capabilities</li>' + 
      '                        <li>A Solution That Grows With Your Business</li>' + 
      '                      </ul>' + 
      '                      <a href="" class="ab-tab-content-btn ab-button-global">Learn More</a>' + 
      '              </div>' + 
      '            </div>' + 
      '            <div class="ab-vertical-tab-item">' + 
      '              <h3 class="ab-vertical-tab-item-header">Watchlist, PEP and Sanctions Screening</h3>' + 
      '              <p class="ab-vertical-tab-item-subheader">Screen entities against the latest watchlists, sanctions lists and PEP lists, and pay only for the screening data you need</p>' + 
      '              <button class="ab-tab-mbl-btn">Learn More</button>' + 
      '              <div class="ab-tab-collapse">' + 
      '                <ul class="ab-tab-content-checklist">' + 
      '                        <li>Access to the Latest Verified and Relevant Lists</li>' + 
      '                        <li>Real-Time, Periodic or Event-Based Screening</li>' + 
      '                        <li>Avoid Risky Relationships While Saving Money On Your Screening Data Costs</li>' + 
      '                        <li>Monitor for PEPs and Negative News</li>' + 
      '                        <li>Reduce False Positives With our New PEP Scoring Model</li>' + 
      '                        <li>Leverage Screening Intelligence Dashboards to Proactively Identify Efficiency Gains</li>' + 
      '                        <li>Dashboard and Audit Trails</li>' + 
      '                      </ul>' + 
      '                      <a href="" class="ab-tab-content-btn ab-button-global">Learn More</a>' + 
      '              </div>' + 
      '            </div>' + 
      '            <div class="ab-vertical-tab-item">' + 
      '              <h3 class="ab-vertical-tab-item-header">Risk Scoring</h3>' + 
      '              <p class="ab-vertical-tab-item-subheader">Accurately assess and manage risks throughout your client relationships</p>' + 
      '              <button class="ab-tab-mbl-btn">Learn More</button>' + 
      '              <div class="ab-tab-collapse">' + 
      '                <ul class="ab-tab-content-checklist">' + 
      '                        <li>Customizable Risk Scoring Models</li>' + 
      '                        <li>Data Integration With Our Sanctions Screening, Identity Verification and KYC, Transaction Monitoring and Regulatory Reporting Modules for Better Scoring</li>' + 
      '                        <li>Ongoing Monitoring for Accurate Scoring with Daily Updates</li>' + 
      '                        <li>Advanced Risk Factors Grouped by Profile and Activity</li>' + 
      '                        <li>Receive Alerts When a Client Surpasses Your Risk Threshold</li>' + 
      '                      </ul>' + 
      '                      <a href="" class="ab-tab-content-btn ab-button-global">Learn More</a>' + 
      '              </div>' + 
      '            </div>' + 
      '            <div class="ab-vertical-tab-item">' + 
      '              <h3 class="ab-vertical-tab-item-header">Regulatory Reporting</h3>' + 
      '              <p class="ab-vertical-tab-item-subheader">Automate compliance reporting to reduce manual efforts and improve accuracy</p>' + 
      '              <button class="ab-tab-mbl-btn">Learn More</button>' + 
      '              <div class="ab-tab-collapse">' + 
      '                <ul class="ab-tab-content-checklist">' + 
      '                        <li>Automated Regulatory Reporting for FinCEN, FINTRAC, goAML and M ore</li>' + 
      '                        <li>Automated Workflows and Intuitive Dashboards for Easier Investigations</li>' + 
      '                        <li>Export Reporting Data to Enhance Risk Scoring</li>' + 
      '                        <li>Real-Time, Periodic, or Event-Based Monitoring</li>' + 
      '                        <li>Dashboard and Audit Trails</li>' + 
      '                      </ul>' + 
      '                      <a href="" class="ab-tab-content-btn ab-button-global">Learn More</a>' + 
      '              </div>' + 
      '            </div>' + 
      '            <div class="ab-vertical-tab-item">' + 
      '              <h3 class="ab-vertical-tab-item-header">Enhanced Due Diligence (EDD)</h3>' + 
      '              <p class="ab-vertical-tab-item-subheader">Order reports directly from our application and receive them in 1/3 of the time for 1/3 of the average industry price</p>' + 
      '              <button class="ab-tab-mbl-btn">Learn More</button>' + 
      '              <div class="ab-tab-collapse">' + 
      '                <ul class="ab-tab-content-checklist">' + 
      '                        <li>Comprehensive reports with in-depth background analysis</li>' + 
      '                        <li>A simplified process that notifies you when it is ready for review</li>' + 
      '                        <li>Use EDD report data to automatically update the entity\'s risk score</li>' + 
      '                        <li>Quickly delivered reports allow you to make timely decisions and keep your business compliant</li>' + 
      '                      </ul>' + 
      '                      <a href="" class="ab-tab-content-btn ab-button-global">Learn More</a>' + 
      '              </div>' + 
      '            </div>' + 
      '            <div class="ab-vertical-tab-item">' + 
      '              <h3 class="ab-vertical-tab-item-header">Case Management</h3>' + 
      '              <p class="ab-vertical-tab-item-subheader">Simplify your workload with customizable workflows for efficient resolutions</p>' + 
      '              <button class="ab-tab-mbl-btn">Learn More</button>' + 
      '              <div class="ab-tab-collapse">' + 
      '                <ul class="ab-tab-content-checklist">' + 
      '                        <li>Intelligent Alert and Case Management Monitoring</li>' + 
      '                        <li>Role-Based Team Collaboration</li>' + 
      '                        <li>Highly Configurable, Intuitive Dashboards</li>' + 
      '                        <li>Granular Permission-Based Interaction</li>' + 
      '                      </ul>' + 
      '                      <a href="" class="ab-tab-content-btn ab-button-global">Learn More</a>' + 
      '              </div>' + 
      '            </div>' + 
      '          </div>' + 
      '        </div>' + 
      '      </section>' + 
      '' + 
      '      <section class="ab-aml-section">' + 
      '        <div class="ab-aml-container">' + 
      '          <div class="ab-aml-column">' + 
      '            <h2 class="ab-aml-header">Fraud Management</h2>' + 
      '            <p class="ab-aml-subheader">Reduce fraud, theft, and misuse</p>' + 
      '          </div>' + 
      '          <a href="" class="ab-aml-btn ab-button-global">Learn More</a>' + 
      '        </div>' + 
      '      </section>' + 
      '' + 
      '      <section class="ab-vertical-tab-section">' + 
      '  <div class="ab-tab-desktop-visible">' + 
      '    <div class="ab-vertical-tab-container">' + 
      '      <div class="ab-vertical-tab-item ab-tab-selected">' + 
      '        <h3 class="ab-vertical-tab-item-header">Account Takeover Fraud Prevention</h3>' + 
      '        <p class="ab-vertical-tab-item-subheader">Safeguard your accounts from unauthorized access with proactive fraud prevention</p>' + 
      '      </div>' + 
      '      <div class="ab-vertical-tab-item">' + 
      '        <h3 class="ab-vertical-tab-item-header">Continuous Controls Monitoring</h3>' + 
      '        <p class="ab-vertical-tab-item-subheader">Detect and respond to irregular activities swiftly with our continuous monitoring</p>' + 
      '      </div>' + 
      '      <div class="ab-vertical-tab-item">' + 
      '        <h3 class="ab-vertical-tab-item-header">Procurement Monitoring</h3>' + 
      '        <p class="ab-vertical-tab-item-subheader">Protect procurement activities from fraud with real-time monitoring and analysis</p>' + 
      '      </div>' + 
      '    </div>' + 
      '' + 
      '    <div class="ab-tab-content-container">' + 
      '      <div class="ab-tab-content">' + 
      '        <div class="ab-teb-content-details">' + 
      '          <img src="https://cdn-3.convertexperiments.com/uf/1002950/10025531/p9-ico.png" alt="" class="icon">' + 
      '          <h2 class="ab-tab-content-header">Account Takeover Fraud Prevention</h2>' + 
      '          <ul class="ab-tab-content-checklist">' + 
      '            <li>Daily Updates of Fraud Risk</li>' + 
      '            <li>World Class Resources</li>' + 
      '            <li>Real-Time Transaction Monitoring</li>' + 
      '            <li>Fraud Risk Scoring You Control</li>' + 
      '            <li>Customizable Resolution Workflows</li>' + 
      '          </ul>' + 
      '          <a href="" class="ab-tab-content-btn ab-button-global">Learn More</a>' + 
      '        </div>' + 
      '        <div class="ab-tab-content-img-container ab-tab-2">' + 
      '          <div class="ab-tab-img ab-tab-img-1">' + 
      '          </div>' + 
      '        </div>' + 
      '      </div>' + 
      '' + 
      '      <div class="ab-tab-content">' + 
      '        <div class="ab-teb-content-details">' + 
      '          <img src="https://cdn-3.convertexperiments.com/uf/1002950/10025531/p10-ico.png" alt="" class="icon">' + 
      '          <h2 class="ab-tab-content-header">Continuous Controls Monitoring</h2>' + 
      '          <ul class="ab-tab-content-checklist">' + 
      '            <li>Easily Monitor:' + 
      '              <ul>' + 
      '                <li>Purchase Cards</li>' + 
      '                <li>Accounts Payable</li>' + 
      '                <li>Payroll</li>' + 
      '              </ul>' + 
      '            </li>' + 
      '            <li>Retail Monitoring</li>' + 
      '            <li>P2P and Vendor Management</li>' + 
      '          </ul>' + 
      '          <a href="" class="ab-tab-content-btn ab-button-global">Learn More</a>' + 
      '        </div>' + 
      '        <div class="ab-tab-content-img-container ab-tab-2">' + 
      '          <div class="ab-tab-img ab-tab-img-2">' + 
      '          </div>' + 
      '        </div>' + 
      '      </div>' + 
      '' + 
      '      <div class="ab-tab-content">' + 
      '        <div class="ab-teb-content-details">' + 
      '          <img src="https://cdn-3.convertexperiments.com/uf/1002950/10025531/p11-ico.png" alt="" class="icon">' + 
      '          <h2 class="ab-tab-content-header">Procurement Monitoring</h2>' + 
      '          <ul class="ab-tab-content-checklist">' + 
      '            <li>Daily Updates of Fraud Risk</li>' + 
      '            <li>World Class Resources</li>' + 
      '            <li>Real-Time Transaction Monitoring</li>' + 
      '            <li>Fraud Risk Scoring You Control</li>' + 
      '            <li>Customizable Resolution Workflows</li>' + 
      '          </ul>' + 
      '          <a href="" class="ab-tab-content-btn ab-button-global">Learn More</a>' + 
      '        </div>' + 
      '        <div class="ab-tab-content-img-container ab-tab-2">' + 
      '          <div class="ab-tab-img ab-tab-img-3">' + 
      '          </div>' + 
      '        </div>' + 
      '      </div>' + 
      '    </div>' + 
      '  </div>' + 
      '' + 
      '  <div class="ab-tab-mobile-visible">' + 
      '    <div class="ab-vertical-tab-container">' + 
      '      <div class="ab-vertical-tab-item ab-tab-selected">' + 
      '        <h3 class="ab-vertical-tab-item-header">Account Takeover Fraud Prevention</h3>' + 
      '        <p class="ab-vertical-tab-item-subheader">Safeguard your accounts from unauthorized access with proactive fraud prevention</p>' + 
      '        <button class="ab-tab-mbl-btn">Learn More</button>' + 
      '        <div class="ab-tab-collapse ab-tab-collapse-active">' + 
      '          <ul class="ab-tab-content-checklist">' + 
      '            <li>A Complete View of Each Client\'s Risk Levels</li>' + 
      '            <li>Adaptable Risk Model</li>' + 
      '            <li>Automated Notifications of Significant Changes to Client Risk Levels</li>' + 
      '            <li>Quick Access to Explanations Behind Client Risk Level Changes</li>' + 
      '          </ul>' + 
      '          <a href="" class="ab-tab-content-btn ab-button-global">Learn More</a>' + 
      '        </div>' + 
      '      </div>' + 
      '      <div class="ab-vertical-tab-item">' + 
      '        <h3 class="ab-vertical-tab-item-header">Continuous Controls Monitoring</h3>' + 
      '        <p class="ab-vertical-tab-item-subheader">Detect and respond to irregular activities swiftly with our continuous monitoring</p>' + 
      '        <button class="ab-tab-mbl-btn">Learn More</button>' + 
      '        <div class="ab-tab-collapse">' + 
      '          <ul class="ab-tab-content-checklist">' + 
      '            <li>Easily Monitor:' + 
      '              <ul>' + 
      '                <li>Purchase Cards</li>' + 
      '                <li>Accounts Payable</li>' + 
      '                <li>Payroll</li>' + 
      '              </ul>' + 
      '            </li>' + 
      '            <li>Retail Monitoring</li>' + 
      '            <li>P2P and Vendor Management</li>' + 
      '          </ul>' + 
      '          <a href="" class="ab-tab-content-btn ab-button-global">Learn More</a>' + 
      '        </div>' + 
      '      </div>' + 
      '      <div class="ab-vertical-tab-item">' + 
      '        <h3 class="ab-vertical-tab-item-header">Procurement Monitoring</h3>' + 
      '        <p class="ab-vertical-tab-item-subheader">Protect procurement activities from fraud with real-time monitoring and analysis</p>' + 
      '        <button class="ab-tab-mbl-btn">Learn More</button>' + 
      '        <div class="ab-tab-collapse">' + 
      '          <ul class="ab-tab-content-checklist">' + 
      '            <li>Daily Updates of Fraud Risk</li>' + 
      '            <li>World Class Resources</li>' + 
      '            <li>Real-Time Transaction Monitoring</li>' + 
      '            <li>Fraud Risk Scoring You Control</li>' + 
      '            <li>Customizable Resolution Workflows</li>' + 
      '          </ul>' + 
      '          <a href="" class="ab-tab-content-btn ab-button-global">Learn More</a>' + 
      '        </div>' + 
      '      </div>' + 
      '    </div>' + 
      '  </div>' + 
      '</section>';

    function init(){
      document.querySelector('[data-id="945bddb"]').insertAdjacentHTML('afterend', customHTML);

      document.querySelectorAll('.ab-vertical-tab-section .ab-tab-desktop-visible').forEach(function(item) {
        item.querySelector('.ab-vertical-tab-item').classList.add('ab-tab-selected');
        item.querySelector('.ab-tab-content').classList.add('ab-tab-content-selected');

        item.querySelectorAll('.ab-vertical-tab-item').forEach(function(tabItem, index) {
          tabItem.addEventListener('click', function(e) {

            // Handle Tab Nav
            item.querySelectorAll('.ab-vertical-tab-item').forEach(function(tab) {
              if (tab.classList.contains('ab-tab-selected')) {
                tab.classList.remove('ab-tab-selected');
              }
            });
            tabItem.classList.add("ab-tab-selected");
            console.log(index)

            // Handles Tab Content

            item.querySelectorAll('.ab-tab-content').forEach(function(tabContent) {
              if (tabContent.classList.contains('ab-tab-content-selected')) {
                tabContent.classList.remove('ab-tab-content-selected');
              }
            })
            item.querySelectorAll('.ab-tab-content')[index].classList.add('ab-tab-content-selected');
          });
        });

      });


      // for mobile

      document.querySelectorAll('.ab-tab-mobile-visible .ab-vertical-tab-container').forEach(function(item) {
        item.querySelectorAll('.ab-vertical-tab-item').forEach(function(tab) {
          tab.querySelector('.ab-tab-mbl-btn').addEventListener('click', function() {
            item.querySelectorAll('.ab-vertical-tab-item').forEach(function(collapsable) {
              if (collapsable.classList.contains('ab-tab-selected')) {
                collapsable.classList.remove('ab-tab-selected')
              }
              if (collapsable.querySelector('.ab-tab-collapse').classList.contains('ab-tab-collapse-active')) {
                collapsable.querySelector('.ab-tab-collapse').classList.remove('ab-tab-collapse-active')
              }
            });
            tab.classList.add('ab-tab-selected');
            tab.querySelector('.ab-tab-collapse').classList.add('ab-tab-collapse-active');
          });
        });
      });
      }


      waitForElement('[data-id="945bddb"]', init, 50, 5000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
