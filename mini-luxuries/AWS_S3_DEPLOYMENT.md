# AWS S3 Deployment Guide for Mini Luxuries

This guide will help you deploy the **Mini Luxuries** static website to Amazon S3 for hosting.

## 📁 Static Files Ready

Your website has been successfully built as a static site and all files are located in the `/out` directory:

```
out/
├── index.html              # Homepage
├── about/
│   └── index.html          # About page
├── cart/
│   └── index.html          # Shopping cart page
├── products/
│   ├── index.html          # Products listing page
│   ├── 1/
│   │   └── index.html      # Product detail pages
│   ├── 2/
│   │   └── index.html      # (All 10 products generated)
│   └── ...
├── 404.html                # 404 error page
├── _next/                  # Next.js assets (CSS, JS)
└── static assets           # Images, fonts, etc.
```

## 🚀 Step 1: Create S3 Bucket

1. **Login to AWS Console**
   - Go to [AWS Console](https://console.aws.amazon.com/)
   - Navigate to S3 service

2. **Create New Bucket**
   ```
   Bucket name: mini-luxuries-website (must be globally unique)
   Region: Choose your preferred region (e.g., us-east-1)
   ```

3. **Configure Bucket Settings**
   - **Block Public Access**: UNCHECK "Block all public access"
   - **Bucket Versioning**: Enable (recommended)
   - **Default Encryption**: Enable

## 🔧 Step 2: Configure Bucket for Website Hosting

1. **Enable Static Website Hosting**
   - Go to bucket → Properties → Static website hosting
   - Select "Enable"
   - Index document: `index.html`
   - Error document: `404.html`

2. **Set Bucket Policy**
   - Go to bucket → Permissions → Bucket policy
   - Add this policy (replace `mini-luxuries-website` with your bucket name):

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::mini-luxuries-website/*"
       }
     ]
   }
   ```

## 📤 Step 3: Upload Files

### Option A: AWS Console (GUI)

1. **Upload Files**
   - Go to bucket → Objects → Upload
   - Select all files from `/out` directory
   - Drag and drop or browse to select files
   - Click "Upload"

2. **Set Permissions**
   - After upload, select all files
   - Actions → Make public

### Option B: AWS CLI (Recommended)

1. **Install AWS CLI**
   ```bash
   # macOS
   brew install awscli
   
   # Ubuntu/Debian
   sudo apt install awscli
   
   # Windows
   # Download from: https://aws.amazon.com/cli/
   ```

2. **Configure AWS CLI**
   ```bash
   aws configure
   # Enter your Access Key ID
   # Enter your Secret Access Key
   # Enter default region (e.g., us-east-1)
   # Enter default output format: json
   ```

3. **Upload Website Files**
   ```bash
   cd /workspace/mini-luxuries
   
   # Sync all files to S3
   aws s3 sync out/ s3://mini-luxuries-website --delete
   
   # Make files public
   aws s3api put-bucket-acl --bucket mini-luxuries-website --acl public-read
   ```

## 🌐 Step 4: Configure Custom Domain (Optional)

### Using CloudFront + Route 53

1. **Create CloudFront Distribution**
   - Origin Domain: `mini-luxuries-website.s3-website-us-east-1.amazonaws.com`
   - Default Root Object: `index.html`
   - Custom Error Pages: 404.html for 404 errors

2. **Setup Custom Domain**
   - Purchase domain through Route 53 or use existing domain
   - Create A record pointing to CloudFront distribution
   - Add SSL certificate via AWS Certificate Manager

## 🔒 Step 5: Security & Performance

### Content Security Policy
Add this to your bucket policy for enhanced security:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowPublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::mini-luxuries-website/*",
      "Condition": {
        "StringEquals": {
          "s3:ExistingObjectTag/Environment": "production"
        }
      }
    }
  ]
}
```

### Performance Optimization
1. **Enable CloudFront** for global CDN
2. **Gzip Compression** - Enable in CloudFront
3. **Cache Headers** - Set appropriate cache policies

## 📊 Step 6: Monitoring & Analytics

### CloudWatch Monitoring
- Set up CloudWatch alarms for bucket access
- Monitor request metrics and errors

### Google Analytics (Optional)
Add tracking code to your `index.html` and other pages:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🚀 Step 7: Deployment Script

Create an automated deployment script:

```bash
#!/bin/bash
# deploy.sh

echo "Building Mini Luxuries website..."
npm run build

echo "Uploading to S3..."
aws s3 sync out/ s3://mini-luxuries-website --delete

echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"

echo "✅ Deployment complete!"
echo "🌐 Website URL: http://mini-luxuries-website.s3-website-us-east-1.amazonaws.com"
```

Make it executable:
```bash
chmod +x deploy.sh
./deploy.sh
```

## 💰 Cost Estimation

### S3 Hosting Costs (Monthly)
- **Storage**: ~$0.023 per GB (first 50 TB)
- **Data Transfer**: First 1 GB free, then $0.09 per GB
- **Requests**: $0.0004 per 1,000 requests

**Estimated Monthly Cost**: $1-5 USD for a small business website

### Additional Costs
- **Domain**: $12/year (via Route 53)
- **CloudFront**: $0.085 per GB (first 10 TB)
- **SSL Certificate**: Free (via AWS Certificate Manager)

## 🔍 Troubleshooting

### Common Issues

1. **403 Forbidden Error**
   - Check bucket policy is correct
   - Ensure files are publicly readable
   - Verify bucket name in policy matches actual bucket

2. **404 Not Found**
   - Confirm `index.html` exists in bucket root
   - Check error document is set to `404.html`
   - Verify all product pages were uploaded

3. **CSS/JS Not Loading**
   - Ensure `_next/` folder was uploaded
   - Check CORS settings if using custom domain
   - Verify file paths are correct

## 📋 Pre-Deployment Checklist

- [ ] S3 bucket created and configured
- [ ] Static website hosting enabled
- [ ] Bucket policy applied
- [ ] All files uploaded from `/out` directory
- [ ] Error document configured
- [ ] Website accessible via S3 URL
- [ ] (Optional) Custom domain configured
- [ ] (Optional) CloudFront distribution setup
- [ ] (Optional) SSL certificate applied

## 🌟 Your Website URLs

After deployment, your website will be accessible at:

- **S3 Website URL**: `http://mini-luxuries-website.s3-website-us-east-1.amazonaws.com`
- **CloudFront URL**: `https://your-distribution-id.cloudfront.net` (if using CloudFront)
- **Custom Domain**: `https://your-domain.com` (if configured)

## 📞 Support

For deployment issues:
1. Check AWS documentation
2. Verify all steps were followed correctly
3. Check AWS CloudWatch logs for errors
4. Contact AWS support if needed

---

**🎉 Congratulations!** Your Mini Luxuries perfume website is now ready for the world to see!

**Next Steps:**
- Add Google Analytics
- Set up backup strategies
- Monitor performance and costs
- Plan for content updates and product additions