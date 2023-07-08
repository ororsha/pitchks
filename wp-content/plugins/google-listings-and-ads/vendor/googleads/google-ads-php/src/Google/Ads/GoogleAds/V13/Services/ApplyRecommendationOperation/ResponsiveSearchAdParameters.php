<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/ads/googleads/v13/services/recommendation_service.proto

namespace Google\Ads\GoogleAds\V13\Services\ApplyRecommendationOperation;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Parameters to use when applying a responsive search ad recommendation.
 *
 * Generated from protobuf message <code>google.ads.googleads.v13.services.ApplyRecommendationOperation.ResponsiveSearchAdParameters</code>
 */
class ResponsiveSearchAdParameters extends \Google\Protobuf\Internal\Message
{
    /**
     * Required. New ad to add to recommended ad group.
     *
     * Generated from protobuf field <code>.google.ads.googleads.v13.resources.Ad ad = 1 [(.google.api.field_behavior) = REQUIRED];</code>
     */
    protected $ad = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Google\Ads\GoogleAds\V13\Resources\Ad $ad
     *           Required. New ad to add to recommended ad group.
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Google\Ads\GoogleAds\V13\Services\RecommendationService::initOnce();
        parent::__construct($data);
    }

    /**
     * Required. New ad to add to recommended ad group.
     *
     * Generated from protobuf field <code>.google.ads.googleads.v13.resources.Ad ad = 1 [(.google.api.field_behavior) = REQUIRED];</code>
     * @return \Google\Ads\GoogleAds\V13\Resources\Ad|null
     */
    public function getAd()
    {
        return $this->ad;
    }

    public function hasAd()
    {
        return isset($this->ad);
    }

    public function clearAd()
    {
        unset($this->ad);
    }

    /**
     * Required. New ad to add to recommended ad group.
     *
     * Generated from protobuf field <code>.google.ads.googleads.v13.resources.Ad ad = 1 [(.google.api.field_behavior) = REQUIRED];</code>
     * @param \Google\Ads\GoogleAds\V13\Resources\Ad $var
     * @return $this
     */
    public function setAd($var)
    {
        GPBUtil::checkMessage($var, \Google\Ads\GoogleAds\V13\Resources\Ad::class);
        $this->ad = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(ResponsiveSearchAdParameters::class, \Google\Ads\GoogleAds\V13\Services\ApplyRecommendationOperation_ResponsiveSearchAdParameters::class);

