<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/ads/googleads/v13/services/audience_insights_service.proto

namespace Google\Ads\GoogleAds\V13\Services;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * The response message for
 * [AudienceInsightsService.GenerateInsightsFinderReport][google.ads.googleads.v13.services.AudienceInsightsService.GenerateInsightsFinderReport],
 * containing the shareable URL for the report.
 *
 * Generated from protobuf message <code>google.ads.googleads.v13.services.GenerateInsightsFinderReportResponse</code>
 */
class GenerateInsightsFinderReportResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * An HTTPS URL providing a deep link into the Insights Finder UI with the
     * report inputs filled in according to the request.
     *
     * Generated from protobuf field <code>string saved_report_url = 1;</code>
     */
    protected $saved_report_url = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $saved_report_url
     *           An HTTPS URL providing a deep link into the Insights Finder UI with the
     *           report inputs filled in according to the request.
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Google\Ads\GoogleAds\V13\Services\AudienceInsightsService::initOnce();
        parent::__construct($data);
    }

    /**
     * An HTTPS URL providing a deep link into the Insights Finder UI with the
     * report inputs filled in according to the request.
     *
     * Generated from protobuf field <code>string saved_report_url = 1;</code>
     * @return string
     */
    public function getSavedReportUrl()
    {
        return $this->saved_report_url;
    }

    /**
     * An HTTPS URL providing a deep link into the Insights Finder UI with the
     * report inputs filled in according to the request.
     *
     * Generated from protobuf field <code>string saved_report_url = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setSavedReportUrl($var)
    {
        GPBUtil::checkString($var, True);
        $this->saved_report_url = $var;

        return $this;
    }

}

