




render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Topic:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Start Year:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          End Date:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }