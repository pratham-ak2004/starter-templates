# Generate self signed SSL certificates for local development

if [ -d "./certificates" ]; then
  rm -rf ./certificates
fi

mkdir certificates

npm mkcert create-ca --key "./certificates/ca-key.pem" --cert "./certificates/ca-cert.pem"
npm mkcert create-cert --ca-key "./certificates/ca-key.pem" --ca-cert "./certificates/ca-cert.pem" --key "./certificates/cert.key" --cert "./certificates/cert.crt"

rm -rf ./certificates/ca-key.pem
rm -rf ./certificates/ca-cert.pem