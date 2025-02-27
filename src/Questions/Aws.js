export const dummyQuestionsAws = [
    {
      id: 10001,
      question: "What is Amazon S3?",
      technology: "AWS",
      difficulty: "Easy",
      answer: `
        <p><strong>Amazon S3 (Simple Storage Service)</strong> is an object storage service that provides scalability, durability, and security for data storage.</p>
        <ul>
          <li>✅ Stores data as <strong>objects</strong> inside <strong>buckets</strong>.</li>
          <li>✅ Provides <strong>99.999999999% (11 9’s) durability</strong>.</li>
          <li>✅ Supports <strong>IAM policies, ACLs, and encryption</strong> for security.</li>
        </ul>
      `,
      example: false,
      codeSnippet: ``
    },
    {
      id: 10002,
      question: "What are the different storage classes in S3?",
      technology: "AWS",
      difficulty: "Medium",
      answer: `
        <p>S3 offers various storage classes for different use cases:</p>
        <table>
          <tr><th>Storage Class</th><th>Use Case</th><th>Cost</th></tr>
          <tr><td><strong>S3 Standard</strong></td><td>Frequent access</td><td>$$</td></tr>
          <tr><td><strong>S3 Intelligent-Tiering</strong></td><td>Automatic tiering</td><td>$$$</td></tr>
          <tr><td><strong>S3 Standard-IA</strong></td><td>Infrequent access</td><td>$</td></tr>
          <tr><td><strong>S3 Glacier</strong></td><td>Archival storage</td><td>$$</td></tr>
        </table>
      `,
      example: false,
      codeSnippet: ``
    },
    {
      id: 10003,
      question: "How can you upload a file to S3 using AWS SDK in Node.js?",
      technology: "AWS",
      difficulty: "Medium",
      answer: `
        <p>You can upload a file to S3 using the AWS SDK for Node.js by configuring your credentials and using the <code>s3.upload()</code> method.</p>
      `,
      example: true,
      codeSnippet: `
        const AWS = require('aws-sdk');
        const fs = require('fs');
  
        const s3 = new AWS.S3({
          accessKeyId: 'YOUR_ACCESS_KEY',
          secretAccessKey: 'YOUR_SECRET_KEY',
          region: 'us-east-1'
        });
  
        const uploadFile = async () => {
          const fileContent = fs.readFileSync('example.txt');
  
          const params = {
            Bucket: 'my-bucket',
            Key: 'example.txt',
            Body: fileContent
          };
  
          try {
            const data = await s3.upload(params).promise();
            console.log('File uploaded successfully:', data.Location);
          } catch (error) {
            console.error('Upload failed:', error);
          }
        };
  
        uploadFile();
      `
    },
    {
      id: 10004,
      question: "How can you generate a pre-signed URL in S3?",
      technology: "AWS",
      difficulty: "Medium",
      answer: `
        <p>A pre-signed URL allows temporary access to an S3 object.</p>
      `,
      example: true,
      codeSnippet: `
        const params = {
          Bucket: 'my-bucket',
          Key: 'example.txt',
          Expires: 60 // Link valid for 60 seconds
        };
  
        s3.getSignedUrl('getObject', params, (err, url) => {
          if (err) console.error(err);
          console.log('Pre-signed URL:', url);
        });
      `
    },
    {
      id: 10005,
      question: "What is the difference between S3 and EBS?",
      technology: "AWS",
      difficulty: "Medium",
      answer: `
        <p><strong>S3 vs EBS:</strong></p>
        <table>
          <tr><th>Feature</th><th>S3</th><th>EBS</th></tr>
          <tr><td><strong>Type</strong></td><td>Object Storage</td><td>Block Storage</td></tr>
          <tr><td><strong>Use Case</strong></td><td>Static files, backups</td><td>Attached to EC2</td></tr>
          <tr><td><strong>Performance</strong></td><td>High latency</td><td>Low latency</td></tr>
        </table>
      `,
      example: false,
      codeSnippet: ``
    },
    {
      id: 10006,
      question: "How does S3 versioning work?",
      technology: "AWS",
      difficulty: "Medium",
      answer: `
        <p>S3 versioning allows multiple versions of an object to be stored, preventing accidental deletions.</p>
      `,
      example: true,
      codeSnippet: `
        # Enable versioning using AWS CLI
        aws s3api put-bucket-versioning --bucket my-bucket --versioning-configuration Status=Enabled
  
        # Delete an object but keep old versions
        aws s3 rm s3://my-bucket/example.txt
  
        # Restore an old version
        aws s3 cp s3://my-bucket/example.txt --version-id <version_id> .
      `
    },
    {
      id: 10007,
      question: "What is S3 Lifecycle Management?",
      technology: "AWS",
      difficulty: "Medium",
      answer: `
        <p>S3 Lifecycle Management automatically moves objects to different storage classes or deletes them after a certain period.</p>
      `,
      example: true,
      codeSnippet: `
        {
          "Rules": [
            {
              "ID": "MoveToGlacier",
              "Status": "Enabled",
              "Prefix": "logs/",
              "Transitions": [
                {
                  "Days": 30,
                  "StorageClass": "GLACIER"
                }
              ]
            }
          ]
        }
      `
    },
    {
      id: 10008,
      question: "What is S3 Cross-Region Replication (CRR)?",
      technology: "AWS",
      difficulty: "Hard",
      answer: `
        <p>S3 Cross-Region Replication (CRR) automatically copies objects from one region to another.</p>
      `,
      example: true,
      codeSnippet: `
        {
          "Role": "arn:aws:iam::123456789012:role/S3ReplicationRole",
          "Rules": [
            {
              "Status": "Enabled",
              "Prefix": "",
              "Destination": {
                "Bucket": "arn:aws:s3:::destination-bucket"
              }
            }
          ]
        }
      `
    }
  ];
  
  