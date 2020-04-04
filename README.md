# Cloudflare Worker - Keybase Proof and Security.txt
![Deploy](https://github.com/jamesridgway/cloudflare-worker-security/workflows/Deploy/badge.svg?branch=master)

A Cloudflare Worker for serving up keybase proof and security.txt files.

## Getting Started
1. Install and configure [wrangler](https://github.com/cloudflare/wrangler)
2. Create a `wrangler.toml` from `wrangler.toml.template`
4. Ensure you set the `route`, `zone_id` and `action_id` to values that suite your setup. Some of these can be supplied via [environment variables](https://developers.cloudflare.com/workers/tooling/wrangler/configuration). 
3. Publish with wrangler:

       wrangler publish
