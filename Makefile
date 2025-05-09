# Security Event Monitor Makefile

# Default target
.PHONY: all
all: help

# Help command
.PHONY: help
help:
	@echo "Security Event Monitor - Available commands:"
	@echo "  make install    - Install dependencies for client and server"
	@echo "  make client     - Start only the client in development mode"
	@echo "  make server     - Start only the server in development mode"
	@echo "  make test       - Run tests for client and server"
	@echo "  make clean      - Clean up node_modules and build artifacts"

# Install dependencies for both client and server
.PHONY: install
install:
	@echo "Installing server dependencies..."
	cd server && npm install
	@echo "Installing client dependencies..."
	cd client && npm install

# Start only client
.PHONY: client
client:
	@echo "Starting client in development mode..."
	cd client && npm run dev

# Start only server
.PHONY: server
server:
	@echo "Starting server in development mode..."
	cd server && npm run dev

# Run tests for both client and server
.PHONY: test
test:
	@echo "Running server tests..."
	cd server && npm test
	@echo "Running client tests..."
	cd client && npm test

# Clean up node modules and build artifacts
.PHONY: clean
clean:
	@echo "Cleaning up server..."
	rm -rf server/node_modules
	@echo "Cleaning up client..."
	rm -rf client/node_modules
	@echo "Cleaning up build artifacts..."
	rm -rf client/dist
